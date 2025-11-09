import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: { id: "asc" }, // ordena por ID para mantener consistencia
    });

    return new Response(JSON.stringify(products), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("❌ Error obteniendo productos:", error);
    return new Response(JSON.stringify({ error: "Error al obtener productos" }), { status: 500 });
  }
}
