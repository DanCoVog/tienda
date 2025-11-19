import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const products = await prisma.Product.findMany({  // ← CAMBIADO
      orderBy: { id: "asc" },
    });

    return new Response(JSON.stringify(products), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("❌ Error obteniendo productos:", error);
    return new Response(
      JSON.stringify({ error: "Error al obtener productos" }),
      { status: 500 }
    );
  }
}
