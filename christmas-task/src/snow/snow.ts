import { Snowflake, SnowflakePosition } from "./snow-flake";

export interface SnowSceneConfig {
    color: string;
    volumn: number;
}

const defaultSnowSceneConfig: SnowSceneConfig = {
    color: "#ffffff",
    volumn: 300,
};

export class SnowScene {
    config: SnowSceneConfig;

    private container: HTMLElement;

    private canvas: HTMLCanvasElement | undefined;

    private ctx: CanvasRenderingContext2D | undefined;

    private snowflakes!: Snowflake[];

    private active = false;

    private initialised = false;

    private animationId = 0;

    constructor(container: string | HTMLElement = "body", config?: SnowSceneConfig) {
        const containerElement = typeof container === "string" ? document.querySelector<HTMLElement>(container) : container;

        if (containerElement) {
            this.container = containerElement;
        } else {
            throw new Error("can not find container by specified selector");
        }

        this.config = { ...defaultSnowSceneConfig, ...config };

        this.buildScene();
    }

    play(): void {
        if (!this.initialised) {
            this.buildScene();
        }

        this.active = true;
        this.snowflakes.forEach((s) => (s.active = true));

        if (!this.animationId) {
            this.animationId = requestAnimationFrame(() => this.updateFrame());
        }
    }

    pause(): void {
        this.active = false;
        this.snowflakes.forEach((s) => (s.active = false));
    }

    private buildScene(): void {
        const canvas = document.createElement("canvas");

        canvas.style.position = "absolute";
        canvas.style.left = "0";
        canvas.style.top = "0";
        canvas.style.pointerEvents = "none";
        canvas.width = this.container.clientWidth;
        canvas.height = this.container.clientHeight;

        this.container.appendChild(canvas);

        this.canvas = canvas;

        const ctx = canvas.getContext("2d");
        if (ctx) {
            this.ctx = ctx;
        } 

        this.snowflakes = [];
        for (let i = 0; i < this.config.volumn; i++) {
            const flake = new Snowflake(this.canvas);

            flake.color = this.config.color;

            this.snowflakes.push(flake);
        }

        
        this.initialised = true;
    }

    private destroyScene(): void {
        this.canvas?.remove();
        this.initialised = false;
    }

    private updateFrame(): void {
        if (!this.canvas || !this.ctx) {
            return;
        }

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.snowflakes.forEach((flake) => {
            flake.draw();
        });

        if (!this.active && this.snowflakes.every((flake) => flake.pos !== SnowflakePosition.ONSTAGE)) {
            this.animationId = 0;
            this.destroyScene();
        } else {
            this.animationId = requestAnimationFrame(() => this.updateFrame());
        }
    }
}