process.env.NODE_ENV = "test";

describe("Search Tests", () => {
  it("error on empty search param", async () => {
    const requestUrl = encodeURI("http://localhost:3000/api/items");
    const response = await fetch(requestUrl);
    const json = await response.json();
    expect(json).toHaveProperty("error");
  });

  it("return 4 items", async () => {
    const requestUrl = encodeURI(
      "http://localhost:3000/api/items?search=iphone"
    );
    const response = await fetch(requestUrl);
    const json = await response.json();
    expect(json).toHaveProperty("items");
    expect(json.items).toHaveLength(4);
  });

  it("return author", async () => {
    const requestUrl = encodeURI(
      "http://localhost:3000/api/items?search=iphone"
    );
    const response = await fetch(requestUrl);
    const json = await response.json();
    expect(json).toHaveProperty("author");
  });

  it("return 2 categories", async () => {
    const requestUrl = encodeURI(
      "http://localhost:3000/api/items?search=iphone"
    );
    const response = await fetch(requestUrl);
    const json = await response.json();
    expect(json).toHaveProperty("categories");
    expect(json.categories).toHaveLength(2);
  });
});

describe("Details Tests", () => {
  it("error on bad product id", async () => {
    const requestUrl = encodeURI("http://localhost:3000/api/items/1");
    const response = await fetch(requestUrl);
    const json = await response.json();
    expect(json).toHaveProperty("error");
  });

  it("return author", async () => {
    const requestUrl = encodeURI(
      "http://localhost:3000/api/items/MLA849361635"
    );
    const response = await fetch(requestUrl);
    const json = await response.json();
    expect(json).toHaveProperty("author");
  });

  it("return complete product", async () => {
    const requestUrl = encodeURI(
      "http://localhost:3000/api/items/MLA849361635"
    );
    const response = await fetch(requestUrl);
    const json = await response.json();
    expect(json).toHaveProperty("item");

    expect(json.item).toEqual({
      id: "MLA849361635",
      title: "Apple iPhone 5s 32 Gb Gris Espacial 1 Gb Ram",
      price: {
        currency: "ARS",
        amount: 44000,
        decimals: 0,
      },
      picture:
        "http://mla-s2-p.mlstatic.com/827453-MLA31002760476_062019-I.jpg",
      condition: "new",
      free_shipping: true,
      categories: ["Celulares y Teléfonos", "Celulares y Smartphones"],
      sold_quantity: 1,
      description:
        'Más para ver\nCon su pantalla IPS de 4", disfrutá de colores intensos y mayor nitidez en todos tus contenidos.\n\nEl espacio que necesitás\nCon su memoria interna de 32 GB descargá tus aplicaciones favoritas y guardá todas las fotos y videos que quieras.\n\nMáxima seguridad\nGracias al sensor de huella dactilar, tendrás acceso a tu teléfono de manera segura y podrás desbloquearlo automáticamente con solo un toque.',
    });
  });
});
