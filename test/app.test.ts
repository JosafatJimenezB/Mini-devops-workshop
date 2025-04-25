import request from "supertest";
import app from "../src/app";

describe("API Endpoints", () => {
  it("GET /ping should return pong 🏓", async () => {
    const res = await request(app).get("/ping");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("pong 🏓");
  });

  it("GET /health should return status ok", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: "ok" });
  });

  it("GET /not-found should return 400", async () => {
    const res = await request(app).get("/not-found");
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual({ status: "Not found lol" });
  });

  it("GET /error should return 500", async () => {
    const res = await request(app).get("/error");
    expect(res.statusCode).toBe(500);
    expect(res.body).toEqual({ status: "Internal server error" });
  });
});
