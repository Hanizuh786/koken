"""
Extract product images from a PDF into public/images/products.

Usage:
  python scripts/extract_pdf_images.py "Fiv5-Profile 11-12-25 J.pdf"

This script extracts embedded raster images from the PDF and names them sequentially.
Manually rename the best product images to the slug filenames listed in public/images/products/README-products.txt.
"""
from pathlib import Path
import sys

try:
    import fitz  # PyMuPDF
except Exception as exc:
    raise SystemExit("PyMuPDF is required. Install with: pip install pymupdf") from exc

if len(sys.argv) < 2:
    raise SystemExit("Usage: python scripts/extract_pdf_images.py <input.pdf>")

pdf_path = Path(sys.argv[1])
out_dir = Path("public/images/products/extracted")
out_dir.mkdir(parents=True, exist_ok=True)

doc = fitz.open(pdf_path)
count = 0
for page_index in range(len(doc)):
    page = doc[page_index]
    for image_index, img in enumerate(page.get_images(full=True), start=1):
        xref = img[0]
        base_image = doc.extract_image(xref)
        ext = base_image.get("ext", "png")
        image_bytes = base_image["image"]
        count += 1
        out_file = out_dir / f"pdf-page-{page_index+1:02d}-image-{image_index:02d}.{ext}"
        out_file.write_bytes(image_bytes)
print(f"Extracted {count} image(s) into {out_dir}")
