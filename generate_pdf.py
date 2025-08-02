from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter

def create_pdf():
    # Crear el archivo PDF
    c = canvas.Canvas("assets/cv.pdf", pagesize=letter)
    
    # Configurar fuente y tamaño
    c.setFont("Helvetica", 12)
    
    # Agregar texto al PDF
    c.drawString(100, 750, "Hola Mundo")
    c.drawString(100, 730, "CV de Marco Valentín Fernández")
    c.drawString(100, 710, "Próximamente: Versión completa del curriculum")
    
    # Guardar el PDF
    c.save()

if __name__ == "__main__":
    create_pdf()
