import './Footer.css'

const Footer = () => {
    return (
      <footer id="contacto" className="footer mt-auto">
        <div className="container py-5">
          <div className="row g-4">

            {/* Columna 1 */}
            <div className="col-lg-3 col-md-6 footer-col">
              <h5 className="footer-title">Atención al cliente</h5>
              <ul className="footer-info-list">
                <li>
                  <i className="bi bi-headset footer-icon-cyan"></i>
                  <span><b>Teléfono:</b> 0810-333-GAMER (42637)</span>
                </li>
                <li>
                  <i className="bi bi-whatsapp footer-icon-cyan"></i>
                  <span><b>WhatsApp:</b> +54 9 11 1234 5678</span>
                </li>
                <li>
                  <i className="bi bi-envelope footer-icon-cyan"></i>
                  <span><b>E-mail:</b> ventas@tiendagamer.com.ar</span>
                </li>
                <li>
                  <i className="bi bi-clock footer-icon-cyan"></i>
                  <span><b>Horario:</b> Lun a Vie de 9 a 18hs. Sáb de 10 a 14hs.</span>
                </li>
                <li>
                  <i className="bi bi-geo-alt footer-icon-cyan"></i>
                  <span><b>Ubicacion:</b> Av. Tienda Gamer 1234, CABA.</span>
                </li>
              </ul>
            </div>

            {/* Columna 2 */}
            <div className="col-lg-3 col-md-6 footer-col">
              <h5 className="footer-title">Ayuda</h5>
              <ul className="footer-links-list">
                <li><a href="#seguimiento">Seguimiento de mi pedido</a></li>
                <li><a href="#garantia">Garantía y Devoluciones</a></li>
                <li><a href="#terminos">Términos y Condiciones</a></li>
                <li><a href="#arrepentimiento">Botón de arrepentimiento</a></li>
                <li><a href="#preguntas">Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Columna 3 */}
            <div className="col-lg-3 col-md-6 footer-col">
              <h5 className="footer-title">Seguinos en</h5>
              <div className="footer-social-logos d-flex gap-4">
                <a href="https://www.facebook.com/alejo.fuentes.1829/" target='_blank' title="Facebook"><i className="bi bi-facebook social-icon"></i></a>
                <a href="https://www.instagram.com/alejo.fuentess_/" target='_blank' title="Instagram"><i className="bi bi-instagram social-icon"></i></a>
                <a href="https://www.linkedin.com/in/alejo-fuentes-263066333/" target='_blank' title="LinkedIn"><i className="bi bi-linkedin social-icon"></i></a>
              </div>
            </div>

            {/* Columna 4 */}
            <div className="col-lg-3 col-md-6 footer-col">
              <h5 className="footer-title">Medios de pago y envío</h5>
              <div className="footer-payment-shipping">
                <p className="footer-subtitle">Medios de pago</p>
                <p className="footer-payment-logos">Tarjetas de Crédito / Débito, Transferencia Bancaria, Mercado Pago.</p>
                
                <p className="footer-subtitle mt-3">Medios de envío</p>
                <p className="footer-shipping-logos">Envíos a todo el país por Oca, Andreani, Correo Argentino y Moto Express.</p>
              </div>
            </div>

          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom py-3">
          <div className="container text-center">
            <p className="m-0 copyright-text">Copyright © 2026 - Tienda Gamer. Buenos Aires, Argentina.</p>
          </div>
        </div>

      </footer>
    )
} 

export default Footer;