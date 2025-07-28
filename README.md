# Calculadora de Acero Estructural

## 📋 Descripción

Calculadora especializada para **diseño de acero estructural**. Herramienta profesional para ingenieros civiles y estructurales que necesitan calcular cuantías de acero, separación de barras y optimizar el diseño de elementos de concreto armado.

## 🎯 Características

- **Cálculo preciso** de cuantías de acero según códigos de diseño
- **Optimización automática** de barras y separaciones
- **Tres tablas interactivas** para diferentes aspectos del diseño
- **Exportación a CSV** de resultados para análisis posterior
- **Validación automática** de datos según normativas
- **Interfaz intuitiva** diseñada para profesionales
- **Responsive design** para uso en desktop y móviles

## 🛠️ Tecnologías

- **Next.js 15** - Framework de React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos y diseño responsive
- **React Hook Form** - Manejo de formularios
- **KaTeX** - Renderizado de fórmulas matemáticas

## 🚀 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Gauss137/steel-calculator.git

# Entrar al directorio
cd steel-calculator

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

## 📊 Funcionalidades

### Tabla 1: Cálculo de Cuantía
- **Área de acero requerida** basada en momento flector
- **Cuantía mínima** según códigos de diseño
- **Cuantía máxima** para evitar falla frágil
- **Validación automática** de límites

### Tabla 2: Optimización de Barras
- **Selección automática** de diámetros de barras
- **Cálculo de cantidades** optimizadas
- **Separación recomendada** entre barras
- **Múltiples opciones** de configuración

### Tabla 3: Diseño Personalizado
- **Cuantía específica** de acero
- **Separación personalizada** entre barras
- **Selección manual** de barras y cantidades
- **Validación en tiempo real**

### Resultados
- **Cuantías de acero** en cm²/m
- **Separación de barras** en cm
- **Diámetros recomendados** de barras
- **Exportación** de resultados en formato CSV

## 🌐 Despliegue

### Vercel (Recomendado)
```bash
# Build para producción
npm run build

# Desplegar en Vercel
vercel --prod
```

### Dominio Personalizado
- **URL**: `https://steelcalculator.cswingenieriacivil.com`
- **Configuración**: Automática con Vercel

## 📁 Estructura del Proyecto

```
steel-calculator/
├── app/
│   ├── steel-calculator/
│   │   └── page.tsx          # Página principal de la calculadora
│   ├── globals.css           # Estilos globales
│   ├── layout.tsx            # Layout principal
│   └── page.tsx              # Redirección automática
├── components/
│   ├── ui/                   # Componentes de UI reutilizables
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── select.tsx
│   │   └── ToggleSection.tsx
│   ├── SteelCalculator.tsx   # Componente principal
│   ├── Header.tsx            # Encabezado de la aplicación
│   ├── Footer.tsx            # Pie de página
│   ├── MobileMenu.tsx        # Menú móvil
│   └── LegalModal.tsx        # Modal legal
├── hooks/
│   └── useSteelCalculator.ts # Lógica de la calculadora
├── lib/
│   ├── steel-constants.ts    # Constantes de acero
│   ├── csv-export.ts         # Exportación CSV
│   └── utils.ts              # Utilidades
├── types/
│   └── index.ts              # Definiciones de tipos TypeScript
├── public/                   # Archivos estáticos
├── vercel.json               # Configuración de Vercel
└── package.json              # Dependencias y scripts
```

## 🔧 Configuración

### Variables de Entorno
```env
# Google Analytics (opcional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Google Search Console (opcional)
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-verification-code
```

### SEO y Metadatos
- **Título**: Calculadora de Acero - CSW Ingeniería Civil
- **Descripción**: Calculadora profesional para diseño de acero estructural
- **Keywords**: calculadora acero, diseño estructural, ingeniería civil, acero construcción, vigas acero
- **Canonical URL**: https://steelcalculator.cswingenieriacivil.com

## 📈 SEO Optimizado

- **Meta tags** completos para motores de búsqueda
- **Open Graph** para redes sociales
- **Twitter Cards** para Twitter
- **Schema.org** markup para rich snippets
- **Sitemap.xml** automático
- **Robots.txt** configurado

## 🧮 Fórmulas Utilizadas

### Cálculo de Cuantía de Acero

**Cuantía mínima:**
- ρ_min = 0.0018 × 420/fy × h × 100

**Cuantía máxima:**
- ρ_max = 0.75 × ρ_balanceada

**Área de acero requerida:**
- As = Mu / (φ × fy × (d - a/2))

**Separación de barras:**
- s = 100 / (As_requerida / As_barra)

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de acceso libre y gratuito. Desarrollado por **CSW Ingeniería Civil**.

## 👨‍💻 Autor

**CSW Ingeniería Civil**
- **Website**: https://www.cswingenieriacivil.com
- **Email**: contacto@cswingenieriacivil.com

## 🙏 Agradecimientos

- **ACI 318** - Código de construcción de concreto
- **NSR-10** - Normas colombianas de construcción sismo resistente
- **Eurocódigo 2** - Diseño de estructuras de concreto

---

**Desarrollado con ❤️ para la comunidad de ingeniería civil** 