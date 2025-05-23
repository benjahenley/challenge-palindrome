import { checkPalindrome } from "../controllers/palindrome.controller.js";
import httpMocks from "node-mocks-http";
import { Request, Response } from "express";

describe("checkPalindrome", () => {
  it("devuelve true para un palindromo valido", () => {
    const req = httpMocks.createRequest({
      method: "POST",
      body: { value: "racecar" },
    });
    const res = httpMocks.createResponse();

    checkPalindrome(req as unknown as Request, res as unknown as Response);

    const data = res._getJSONData();
    expect(data.result).toBe(true);
    expect(res.statusCode).toBe(200);
  });

  it("debería funcionar con caracteres especiales", () => {
    const req = httpMocks.createRequest({
      method: "POST",
      body: { value: "anita lava la tina" },
    });
    const res = httpMocks.createResponse();

    checkPalindrome(req as unknown as Request, res as unknown as Response);

    const data = res._getJSONData();
    expect(data.result).toBe(true);
  });

  it("devuelve false para un palindromo invalido", () => {
    const req = httpMocks.createRequest({
      method: "POST",
      body: { value: "hello" },
    });
    const res = httpMocks.createResponse();

    checkPalindrome(req as unknown as Request, res as unknown as Response);

    const data = res._getJSONData();
    expect(data.result).toBe(false);
    expect(res.statusCode).toBe(200);
  });

  describe("ejemplos en español", () => {
    const palindromes = [
      "anana",
      "radar",
      "somos",
      "larutanatural",
      "amamaromaleavivaelemoraapapaypapaapaparomaleavivaelemoraamama",
    ];

    test.each(palindromes)('"%s" es un palíndromo', (word) => {
      const req = httpMocks.createRequest({
        method: "POST",
        body: { value: word },
      });
      const res = httpMocks.createResponse();

      checkPalindrome(req as unknown as Request, res as unknown as Response);

      const data = res._getJSONData();
      expect(data.result).toBe(true);
    });

    const nonPalindromes = [
      "casa",
      "perro",
      "camino",
      "buenos dias",
      "hola mundo",
      "COBOL es un lenguaje de programación",
    ];

    test.each(nonPalindromes)('"%s" no es un palíndromo', (word) => {
      const req = httpMocks.createRequest({
        method: "POST",
        body: { value: word },
      });
      const res = httpMocks.createResponse();

      checkPalindrome(req as unknown as Request, res as unknown as Response);

      const data = res._getJSONData();
      expect(data.result).toBe(false);
    });
  });

  it("funciona con caracteres individuales", () => {
    const req = httpMocks.createRequest({
      method: "POST",
      body: { value: "a" },
    });
    const res = httpMocks.createResponse();

    checkPalindrome(req as unknown as Request, res as unknown as Response);

    const data = res._getJSONData();
    expect(data.result).toBe(true);
  });

  it("devuelve 400 si el valor no es un string", () => {
    const req = httpMocks.createRequest({
      method: "POST",
      body: { value: 123 },
    });
    const res = httpMocks.createResponse();

    checkPalindrome(req as unknown as Request, res as unknown as Response);

    const data = res._getJSONData();
    expect(res.statusCode).toBe(400);
    expect(data.error).toBe("El valor debe ser un string");
  });

  it("debería funcionar con mayúsculas y minúsculas mezcladas", () => {
    const req = httpMocks.createRequest({
      method: "POST",
      body: { value: "RaceCar" },
    });
    const res = httpMocks.createResponse();

    checkPalindrome(req as unknown as Request, res as unknown as Response);

    const data = res._getJSONData();
    expect(data.result).toBe(true);
  });

  it("funciona con números palindrómicos", () => {
    const req = httpMocks.createRequest({
      method: "POST",
      body: { value: "12321" },
    });
    const res = httpMocks.createResponse();

    checkPalindrome(req as unknown as Request, res as unknown as Response);

    const data = res._getJSONData();
    expect(data.result).toBe(true);
  });

  it("funciona con signos de puntuación", () => {
    const req = httpMocks.createRequest({
      method: "POST",
      body: { value: "A man, a plan, a canal: Panama!" },
    });
    const res = httpMocks.createResponse();

    checkPalindrome(req as unknown as Request, res as unknown as Response);

    const data = res._getJSONData();
    expect(data.result).toBe(true);
  });

  it("debería manejar strings vacíos", () => {
    const req = httpMocks.createRequest({
      method: "POST",
      body: { value: "" },
    });
    const res = httpMocks.createResponse();

    checkPalindrome(req as unknown as Request, res as unknown as Response);

    const data = res._getJSONData();
    expect(data.result).toBe(true);
  });

  it("debería funcionar con palindromos largos", () => {
    const longPalindrome = "ssssss aaaaaa ssssss aaaaaa ssssss";
    const req = httpMocks.createRequest({
      method: "POST",
      body: { value: longPalindrome },
    });
    const res = httpMocks.createResponse();

    checkPalindrome(req as unknown as Request, res as unknown as Response);

    const data = res._getJSONData();
    expect(data.result).toBe(true);
  });
});
