import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request, { params }) {
  const { id } = params;

  try {
    const product = await prisma.product.findUnique({
      where: { id: Number(id) },
    });

    if (!product) {
      return new Response(JSON.stringify({ error: "Producto no encontrado" }), { status: 404 });
    }

    return new Response(JSON.stringify(product), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("❌ Error obteniendo producto:", error);
    return new Response(JSON.stringify({ error: "Error al obtener producto" }), { status: 500 });
  }
}
