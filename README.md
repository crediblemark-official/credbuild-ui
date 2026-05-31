# @crediblemark/build-ui

The official companion visual blocks library for https://www.npmjs.com/package/@crediblemark/build . Packaged with 45+ highly polished, production-ready premium blocks (from business layouts, headers, hero blocks, to grids and custom pricing panels) to speed up your page-building workflow.

[![npm version](https://img.shields.io/npm/v/@crediblemark/build-ui.svg)](https://www.npmjs.com/package/@crediblemark/build-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## ⚡ Zero-Config Quick Start (Recommended)

The easiest way to integrate `@crediblemark/build-ui` into a project already using `@crediblemark/build` is by using the intelligent Crediblemark CLI.

Inside your project root, run:
```bash
npx credbuild add build-ui
```

This dynamic command will automatically:
1. Detect your package manager (`bun`, `pnpm`, `yarn`, `npm`) and install `@crediblemark/build-ui`.
2. Find your global CSS file (e.g. `app/globals.css`, `src/index.css`) and prepend the neat sidebar import stylesheet.
3. Automatically generate a ready-to-use `credbuild.config.tsx` with all the companion presets imported.

---

## 🛠️ Manual Installation

If you prefer to configure the blocks manually, follow these three simple steps:

### 1. Install the Package
Add the library as a dependency to your React project:
```bash
bun add @crediblemark/build-ui
# or npm install @crediblemark/build-ui
# or pnpm add @crediblemark/build-ui
```

### 2. Import the Stylesheets
In your main global CSS stylesheet (e.g., `app/globals.css`, `src/index.css`), add the companion stylesheet import statement at the **very top** (before any other rules):
```css
@import "@crediblemark/build-ui/sidebar-neat.css";
```

### 3. Register the Preset in your Config
Import and export `buildUiPreset` inside your editor configuration file `credbuild.config.tsx`:
```tsx
import { buildUiPreset } from "@crediblemark/build-ui";

// Crediblemark Visual Editor Configuration
const config = buildUiPreset;

export default config;
```

---

## 🧩 Mixing Package Blocks & Custom Local Blocks

When you install `@crediblemark/build-ui`, all the 45+ companion blocks are installed inside your project's `node_modules`. This keeps your project's codebase completely clean and allows you to update the companion library effortlessly with a single command (`npm update @crediblemark/build-ui`) whenever new features or bug fixes are released.

If you want to create your own local custom blocks (e.g., in `components/credbuild/`) and mix them with the companion blocks, you can easily combine them inside `credbuild.config.tsx`:

```tsx
import { buildUiPreset } from "@crediblemark/build-ui";
import MyLocalCustomHero from "@/components/credbuild/MyLocalCustomHero";

// Combine companion package blocks with your local custom blocks
const config = {
  ...buildUiPreset,
  components: {
    ...buildUiPreset.components,       // Expose all 45+ package blocks
    "my-local-hero": MyLocalCustomHero // Expose your custom local block
  }
};

export default config;
```

---

## 🎨 Block Library Highlights

`@crediblemark/build-ui` brings highly stylized, beautifully structured vanilla CSS responsive blocks to your visual builder:
- **Modular Sections**: Rich Heading Blocks, Flex Columns, dynamic Container wrappers.
- **Thematic Elements**: Feature Items with customizable icons, grid blocks, pricing models, and customizable buttons.
- **High-Fidelity Animations**: Native support for micro-animations like `fadeIn`, `slideUp`, `zoomIn`, and `slideRight` built directly into the render blocks.
- **Aesthetic Precision**: Tailored to adhere to Crediblemark's signature premium neutral-dark layouts.

---

## 🖼️ Media Library Setup (Next.js)

The companion blocks (like Hero sections and Galleries) utilize a built-in **Media Picker** which expects two Next.js API endpoints to function properly: `/api/media` for uploading/listing files, and `/api/media/proxy` for avoiding CORS issues on external images.

You must implement these endpoints in your project. Below is a simple local storage simulator (saving to `public/uploads`) you can use during development:

**1. `src/app/api/media/proxy/route.ts` (CORS Proxy)**
```typescript
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const url = new URL(request.url).searchParams.get('url');
  if (!url) return new NextResponse('Missing url parameter', { status: 400 });

  try {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    return new NextResponse(buffer, {
      headers: { 'Content-Type': response.headers.get('content-type') || 'image/jpeg' },
    });
  } catch (error) {
    return new NextResponse('Error fetching image', { status: 500 });
  }
}
```

**2. `src/app/api/media/route.ts` (Uploads & Gallery)**
```typescript
import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

let mediaStore: any[] = []; // In-memory database for dev

export async function GET() {
  return NextResponse.json({ data: mediaStore });
}

export async function POST(request: Request) {
  const file = (await request.formData()).get('file') as File;
  if (!file) return NextResponse.json({ error: "No file" }, { status: 400 });

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
  
  await mkdir(join(process.cwd(), 'public', 'uploads'), { recursive: true });
  await writeFile(join(process.cwd(), 'public', 'uploads', filename), buffer);

  const mediaItem = {
    id: Date.now().toString(), filename: file.name,
    url: `/uploads/${filename}`, mimeType: file.type, size: file.size,
  };
  mediaStore = [mediaItem, ...mediaStore];
  
  return NextResponse.json(mediaItem);
}
```

---

## 🛒 Order Form Block Backend Integration Guide

The `OrderForm` block interacts with two backend API endpoints to fetch products and submit new checkout orders. If these endpoints are not available on the consumer platform (e.g. they return 404 or a network error), the block gracefully deactivates itself and displays a placeholder message instead of causing JS runtime crashes.

To enable the order form features in your own application, replicate the database models and the REST API endpoints detailed below:

### 1. Database Schema (Prisma)
Ensure your database has the following tables to store products, orders, and individual ordered items:

```prisma
model Product {
  id             String      @id @default(cuid())
  name           String
  slug           String      @unique
  description    String?
  price          Decimal
  originalPrice  Decimal?
  currency       String?     @default("IDR")
  images         String[]
  stock          Int?        @default(0)
  createdAt      DateTime    @default(now())
  updatedAt      DateTime    @updatedAt
  orderItems     OrderItem[]
}

model Order {
  id                String      @id @default(cuid())
  customerName      String
  customerEmail     String
  customerAddress   String
  total             Decimal
  status            String?     @default("pending")
  createdAt         DateTime    @default(now())
  paymentStatus     String?     @default("pending")
  fulfillmentStatus String?     @default("unfulfilled")
  paymentUrl        String?
  paymentReference  String?
  paymentMethod     String?
  items             OrderItem[]
}

model OrderItem {
  id        String  @id @default(cuid())
  orderId   String
  productId String
  quantity  Int
  price     Decimal
  order     Order   @relation(fields: [orderId], references: [id], onDelete: Cascade)
  product   Product @relation(fields: [productId], references: [id])
}
```

### 2. REST API Endpoints Specification

#### A. Fetch Active Products (`GET /api/products`)
Used by the editor and landing pages to query the list of selectable items.

- **Expected Response JSON**:
```json
{
  "data": [
    {
      "id": "prod_12345",
      "name": "Awesome Package",
      "slug": "awesome-package",
      "price": 150000,
      "originalPrice": 250000,
      "currency": "IDR",
      "images": ["/uploads/product-image.png"],
      "stock": 100
    }
  ]
}
```

#### B. Place New Order (`POST /api/orders`)
Triggered when a customer submits the checkout form.

- **Expected Payload JSON**:
```json
{
  "name": "Budi Sudarsono",
  "email": "budi@example.com",
  "phone": "081234567890",
  "address": "Jl. Raya Utama No. 123",
  "city": "Jakarta Pusat",
  "zip": "10110",
  "paymentMethod": "manual",
  "items": [
    {
      "productId": "prod_12345",
      "quantity": 2,
      "price": 150000
    }
  ]
}
```

- **Expected Response JSON**:
```json
{
  "id": "order_67890",
  "customerName": "Budi Sudarsono",
  "customerEmail": "budi@example.com",
  "customerAddress": "Jl. Raya Utama No. 123 (Kurir: JNE) (Catatan: Harap kirim sore)",
  "total": "300000.00",
  "paymentMethod": "manual",
  "paymentUrl": "custom:{\"paymentMethod\":\"manual\",\"bankName\":\"BCA\",\"accountHolder\":\"John Doe\",\"vaNumber\":\"1234567890\",\"instructions\":\"Transfer ke rekening BCA\"}"
}
```
*Note: If `paymentUrl` is returned, the client is redirected to `/checkout/payment/[orderId]`. If empty or null, the client is redirected to `/checkout/success?orderId=[orderId]`.*

---

## 📜 License

MIT © [Rasyiqi Crediblemark](https://github.com/crediblemark-official)

