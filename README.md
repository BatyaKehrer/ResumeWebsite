# React Resume Website

A modern, responsive React resume website with sections for personal information, experience, education, and skills.

## Features

- **Personal Information**: Profile section with contact details and professional summary
- **Professional Experience**: Detailed work history with achievements and responsibilities
- **Education**: Academic background and certifications
- **Skills**: Technical skills organized by category
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Modern UI**: Clean, professional design with smooth animations

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

To create a production build:

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Customization

### Personal Information
Edit `src/components/PersonalInfo.js` to update:
- Your name and title
- Professional summary
- Contact information
- Profile image (replace `/KK2025-93.jpg` with your photo)

### Experience
Edit `src/components/Experience.js` to update:
- Job titles and companies
- Employment dates
- Job descriptions and achievements
- Company locations

### Education
Edit `src/components/Education.js` to update:
- Degree information
- Institution names
- Graduation dates
- Academic achievements

### Skills
Edit `src/components/Skills.js` to update:
- Technical skills
- Skill categories
- Add or remove skill items

### Styling
All CSS files are located in the `src/components/` directory. You can customize:
- Colors and gradients
- Typography
- Layout and spacing
- Animations and transitions

## Technologies Used

- React 18
- JavaScript (ES6+)
- CSS3 with Flexbox and Grid
- React Scripts for build tooling

## Browser Support

This application works in all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

