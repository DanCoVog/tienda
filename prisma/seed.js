import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// 🎨 Colores para la consola
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  blue: '\x1b[36m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  magenta: '\x1b[35m',
};

const log = {
  info: (msg) => console.log(`${colors.blue}ℹ️  ${msg}${colors.reset}`),
  success: (msg) => console.log(`${colors.green}✅ ${msg}${colors.reset}`),
  warning: (msg) => console.log(`${colors.yellow}⚠️  ${msg}${colors.reset}`),
  error: (msg) => console.log(`${colors.red}❌ ${msg}${colors.reset}`),
  section: (msg) => console.log(`\n${colors.bright}${colors.magenta}━━━ ${msg} ━━━${colors.reset}\n`),
};

// 📦 Datos de productos organizados por categoría
const productsData = {
  mens: [
    {
      name: "Camisa Para Hombre Roja",
      price: 30000,
      img: "https://i.pinimg.com/736x/85/59/32/8559327ae237ba29caa06f68f1b5cb8d.jpg",
      category: "Mens",
      description: "Camisa básica de algodón color rojo, ideal para uso diario.",
      stock: 15,
      featured: true
    },
    {
      name: "Camisa Para Hombre Verde",
      price: 30000,
      img: "https://i.pinimg.com/1200x/a9/b4/a1/a9b4a10c1cec1b1a87b78d2000171bfc.jpg",
      category: "Mens",
      description: "Camisa de corte clásico color verde con tela transpirable.",
      stock: 20,
      featured: false
    },
    {
      name: "Camisa Para Hombre Blanca",
      price: 30000,
      img: "https://i.pinimg.com/1200x/87/3a/73/873a73ef8c7bcc267bc490cf9652f7e8.jpg",
      category: "Mens",
      description: "Camisa blanca versátil que combina con cualquier outfit.",
      stock: 25,
      featured: true
    },
    {
      name: "Camisa Para Hombre Negra",
      price: 30000,
      img: "https://i.pinimg.com/736x/cf/9a/72/cf9a726bd71f19c0846d04ba6fe69efb.jpg",
      category: "Mens",
      description: "Camisa color negro, elegante y cómoda para cualquier ocasión.",
      stock: 18,
      featured: true
    },
    {
      name: "Camisa Para Hombre Gris",
      price: 30000,
      img: "https://i.pinimg.com/736x/ab/d3/58/abd35876c081a78a5c1953c2453dcf59.jpg",
      category: "Mens",
      description: "Camisa gris básica, combinable con jeans o pantalones casuales.",
      stock: 22,
      featured: false
    },
    {
      name: "Camisa Para Hombre Azul",
      price: 30000,
      img: "https://i.pinimg.com/1200x/d6/9b/45/d69b45df33eaf21a533615e382ccda3c.jpg",
      category: "Mens",
      description: "Camisa azul clásica con textura suave y fresca.",
      stock: 30,
      featured: false
    },
    {
      name: "Camisa Para Hombre Amarilla",
      price: 30000,
      img: "https://i.pinimg.com/736x/e3/d4/44/e3d44422419a5a27062dc8fba59f65fd.jpg",
      category: "Mens",
      description: "Camisa amarilla brillante que aporta un toque moderno.",
      stock: 12,
      featured: false
    },
    {
      name: "Camisa Para Hombre Cafe",
      price: 30000,
      img: "https://i.pinimg.com/736x/f9/26/7c/f9267ce891e243dac91b27131deeb643.jpg",
      category: "Mens",
      description: "Camisa café casual con diseño cómodo y tejido resistente.",
      stock: 16,
      featured: false
    },
  ],

  womens: [
    {
      name: "Vestido Para Mujer Rojo",
      price: 45000,
      img: "https://i.pinimg.com/736x/9f/0b/c6/9f0bc6a7e2998c5a8c4102ed84749e51.jpg",
      category: "Womens",
      description: "Vestido elegante color rojo ideal para ocasiones especiales.",
      stock: 10,
      featured: true
    },
    {
      name: "Saco Para Mujer Blanco",
      price: 35000,
      img: "https://i.pinimg.com/1200x/17/c2/9e/17c29e1ff4909a1b529fbfe77434a9bb.jpg",
      category: "Womens",
      description: "Saco blanco moderno, ideal para días fríos y looks casuales.",
      stock: 14,
      featured: false
    },
    {
      name: "Camisa Para Mujer Negra",
      price: 32000,
      img: "https://i.pinimg.com/1200x/d5/d2/aa/d5d2aa7ae503864d80d7080c90e3c9fa.jpg",
      category: "Womens",
      description: "Camisa negra con estilo minimalista y tela ligera.",
      stock: 20,
      featured: true
    },
    {
      name: "Saco Para Mujer Gris",
      price: 38000,
      img: "https://i.pinimg.com/736x/24/71/74/247174c1dbffab87e9f9ad95034d7561.jpg",
      category: "Womens",
      description: "Saco gris básico para un look elegante y cómodo.",
      stock: 12,
      featured: false
    },
    {
      name: "Saco Para Mujer Azul",
      price: 38000,
      img: "https://i.pinimg.com/736x/9b/9b/bc/9b9bbc37c1c7ebc952fbc41bfe9e79c4.jpg",
      category: "Womens",
      description: "Saco azul marino con textura suave, ideal para climas templados.",
      stock: 15,
      featured: false
    },
    {
      name: "Camisa Para Mujer Rosa",
      price: 32000,
      img: "https://i.pinimg.com/736x/10/ec/c6/10ecc6cfcd02856a602b2750f07280f4.jpg",
      category: "Womens",
      description: "Camisa rosada fresca y liviana, perfecta para el verano.",
      stock: 18,
      featured: true
    },
    {
      name: "Camisa Para Mujer Cafe",
      price: 32000,
      img: "https://i.pinimg.com/1200x/c3/b1/e6/c3b1e6504d058bd50df51b41a9894ab2.jpg",
      category: "Womens",
      description: "Camisa color café de algodón, cómoda y versátil.",
      stock: 16,
      featured: false
    },
    {
      name: "Saco Para Mujer Verde",
      price: 38000,
      img: "https://i.pinimg.com/736x/66/54/44/66544492205d82f1aa6e9ca208b4de82.jpg",
      category: "Womens",
      description: "Saco verde con diseño moderno para días casuales.",
      stock: 13,
      featured: false
    },
  ],

  accessories: [
    {
      name: "Correa Para Hombre Cuero",
      price: 45000,
      img: "https://i.pinimg.com/1200x/d3/d0/91/d3d0917b4efa0cc9c546cb34a6614fac.jpg",
      category: "Accessories",
      description: "Correa de cuero genuino color marrón oscuro, resistente y elegante.",
      stock: 25,
      featured: true
    },
    {
      name: "Correa Para Mujer Elegante",
      price: 25000,
      img: "https://i.pinimg.com/736x/6a/c2/31/6ac231d5ded8295b0b536b5e367cb62e.jpg",
      category: "Accessories",
      description: "Correa delgada color beige, ideal para looks casuales y formales.",
      stock: 30,
      featured: false
    },
    {
      name: "Gorra Deportiva",
      price: 20000,
      img: "https://i.pinimg.com/1200x/b2/03/a5/b203a528670e8f507351d47da3c4f03e.jpg",
      category: "Accessories",
      description: "Gorra deportiva ajustable, disponible en varias tallas y colores.",
      stock: 40,
      featured: false
    },
    {
      name: "Perfume Para Hombre Premium",
      price: 65000,
      img: "https://i.pinimg.com/736x/f5/b1/fb/f5b1fb29e95e1c9cc6b91d5d937449e4.jpg",
      category: "Accessories",
      description: "Fragancia masculina intensa con notas amaderadas y especiadas.",
      stock: 20,
      featured: true
    },
  ],
};

// 🔧 Función principal de seed
async function main() {
  try {
    log.section("🚀 INICIANDO SEED DE BASE DE DATOS");

    // 🧹 Limpiar base de datos
    log.info("Limpiando base de datos...");
    const deleteResult = await prisma.product.deleteMany();
    log.success(`${deleteResult.count} productos eliminados`);

    // 📦 Preparar todos los productos
    const allProducts = [
      ...productsData.mens,
      ...productsData.womens,
      ...productsData.accessories,
    ];

    log.section(`📦 INSERTANDO ${allProducts.length} PRODUCTOS`);

    // 💾 Insertar productos
    log.info("Insertando productos en la base de datos...");
    const result = await prisma.product.createMany({
      data: allProducts,
    });

    log.success(`${result.count} productos insertados exitosamente`);

    // 📊 Resumen por categoría
    log.section("📊 RESUMEN POR CATEGORÍA");
    
    const mensCount = await prisma.product.count({ where: { category: "Mens" } });
    const womensCount = await prisma.product.count({ where: { category: "Womens" } });
    const accessoriesCount = await prisma.product.count({ where: { category: "Accessories" } });

    console.log(`${colors.blue}👔 Hombres:${colors.reset}      ${mensCount} productos`);
    console.log(`${colors.magenta}👗 Mujeres:${colors.reset}       ${womensCount} productos`);
    console.log(`${colors.yellow}👜 Accesorios:${colors.reset}    ${accessoriesCount} productos`);

    // 🌟 Productos destacados
    log.section("🌟 PRODUCTOS DESTACADOS");
    const featuredProducts = await prisma.product.findMany({
      where: { featured: true },
      select: { name: true, price: true, category: true }
    });

    featuredProducts.forEach((product, index) => {
      console.log(`  ${index + 1}. ${product.name} - $${product.price.toLocaleString()} (${product.category})`);
    });

    log.section("✨ SEED COMPLETADO EXITOSAMENTE");
    
  } catch (error) {
    log.error("Error durante el seed:");
    console.error(error);
    throw error;
  }
}

// 🎬 Ejecutar seed
main()
  .then(async () => {
    await prisma.$disconnect();
    log.success("Conexión a base de datos cerrada correctamente");
    process.exit(0);
  })
  .catch(async (error) => {
    log.error("Error fatal en el seed");
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });