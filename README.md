# AK Collection - Premium Website

A stunning, production-ready premium e-commerce landing page for AK Collection built with **HTML5, CSS3, and Vanilla JavaScript** - no frameworks, no dependencies.

## 🌟 Features

### Design & UX
- ✨ **Luxury Theme**: White, Gold, Black color scheme
- 🎨 **Glassmorphism**: Modern glass effect cards
- 🌙 **Dark/Light Mode**: Automatic theme switching
- 📱 **Fully Responsive**: Works on all devices
- ⚡ **Premium Animations**: Smooth scroll reveals and hover effects
- 🎯 **Accessibility**: WCAG compliant with keyboard navigation

### Core Sections
- 🎭 **Hero Section**: Eye-catching welcome with animated elements
- 🔗 **Quick Links**: WhatsApp, Instagram, Facebook, Astore
- 🎁 **Discount Section**: Copy-to-clipboard coupon code (AIKF7)
- 🛍️ **Featured Products**: Beautiful product showcase
- ⭐ **Why Choose**: Trust-building features section
- 📲 **QR Code**: WhatsApp channel scanning
- 📧 **Footer**: Comprehensive footer with social links

### Interactive Features
- 🔄 **Dark/Light Mode Toggle**: Persistent theme storage
- 💬 **Floating WhatsApp Button**: Always-accessible contact
- 📤 **Share Button**: Multiple sharing options (WhatsApp, Email, Copy)
- 📋 **Copy Code Button**: One-click coupon code copying
- 🎬 **Scroll Animations**: Reveal effects as you scroll
- 🔄 **Smooth Scroll Navigation**: Elegant page navigation

### Performance & SEO
- ⚡ **Optimized Performance**: Fast loading and smooth animations
- 🔍 **SEO Friendly**: Proper meta tags and structured data
- 📱 **PWA Ready**: Web app manifest for installability
- 🎁 **Open Graph Tags**: Rich previews on social media
- 🎯 **Lazy Loading**: Images load on demand
- ♿ **Accessible**: Screen reader support and keyboard navigation

## 📁 Project Structure

```
AKCollection/
│
├── index.html                    # Main HTML file
├── style.css                     # Complete styling (no external CSS)
├── script.js                     # All JavaScript functionality
├── manifest.json                 # PWA manifest
├── README.md                     # This file
│
└── assets/
    ├── IMG_20260501_005427_314.webp    # Your logo (replace with yours)
    └── file_0000000025c471f8af9db4dd1b2a69bf.png  # QR code (replace with yours)
```

## 🚀 Getting Started

### Preparation

Before deploying, you need to add your images to the `assets` folder:

1. **Logo**: Replace `IMG_20260501_005427_314.webp` with your actual logo
   - Format: WebP, PNG, or JPG
   - Size: Recommended 200x200px minimum

2. **QR Code**: Replace `file_0000000025c471f8af9db4dd1b2a69bf.png` with your WhatsApp QR
   - Format: PNG or JPG
   - Size: Recommended 300x300px

### Local Testing

1. Extract the ZIP file
2. Open `index.html` in your browser
3. Test all features:
   - Navigation menu
   - Theme toggle (dark/light)
   - Copy discount code
   - Share button
   - All links

## 🌐 Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon (top right) → **New repository**
3. Repository name: `akcollection.github.io`
   - **Important**: Replace `akcollection` with your actual GitHub username
   - Example: If your username is `john123`, it should be `john123.github.io`
4. Set to **Public**
5. Click **Create repository**

### Step 2: Install Git (if not already installed)

- **Windows**: Download from [git-scm.com](https://git-scm.com/download/win)
- **Mac**: Run `brew install git` or download from [git-scm.com](https://git-scm.com/download/mac)
- **Linux**: Run `sudo apt-get install git`

### Step 3: Upload Files Using Git Command Line

1. Open Terminal/Command Prompt in your project folder

2. Initialize Git and add your files:
```bash
git init
git add .
git commit -m "Initial commit: AK Collection website"
```

3. Add remote repository (replace `yourusername` with your GitHub username):
```bash
git remote add origin https://github.com/yourusername/yourusername.github.io.git
```

4. Push to GitHub:
```bash
git branch -M main
git push -u origin main
```

### Step 4: Upload Files Using GitHub Desktop (Easier)

1. Download [GitHub Desktop](https://desktop.github.com/)
2. Sign in with your GitHub account
3. Click **File** → **Clone repository**
4. Search for your `yourusername.github.io` repository
5. Click **Clone**
6. Copy all project files into the cloned folder
7. Open GitHub Desktop
8. Click **Summary** tab
9. Enter commit message: "Add AK Collection website"
10. Click **Commit to main**
11. Click **Push origin**

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (gear icon, top right)
3. Scroll to **Pages** (left sidebar)
4. Under "Source", select **main** branch
5. Click **Save**
6. Wait 1-2 minutes for deployment
7. Your site will be live at: `https://yourusername.github.io`

## 📝 Customization

### Change Colors

Edit `style.css` (lines 5-15) to change the luxury theme colors:

```css
:root {
    --primary-color: #D4AF37;      /* Gold */
    --secondary-color: #000000;    /* Black */
    --light-color: #FFFFFF;        /* White */
    /* ... other colors ... */
}
```

### Update Social Links

Edit `index.html` and find the Quick Links section. Update these URLs:

```html
<!-- Line ~103: WhatsApp Channel -->
<a href="YOUR_WHATSAPP_LINK" ...>

<!-- Line ~113: Instagram -->
<a href="YOUR_INSTAGRAM_LINK" ...>

<!-- Line ~123: Facebook -->
<a href="YOUR_FACEBOOK_LINK" ...>

<!-- Line ~133: Astore -->
<a href="YOUR_ASTORE_LINK" ...>
```

### Change Discount Code

Edit `index.html` (around line 200):

```html
<span class="discount-code" id="discountCode">AIKF7</span>
```

Replace `AIKF7` with your code.

### Update Product Images

Edit `index.html` (lines ~283-323). Replace placeholder URLs with your product images:

```html
<img src="YOUR_PRODUCT_IMAGE_URL" alt="Product Name" loading="lazy">
```

### Change Copy Message

Edit `script.js` (line ~123), in the `showCopyFeedback` function:

```javascript
element.textContent = '✓ Your custom message here!';
```

## 🔧 Customization Guide

### Add Your Own Product Images

1. Open `index.html`
2. Find the "Featured Collection" section (around line 280)
3. Replace placeholder URLs in `<img src="...">` tags
4. Update product names and descriptions

### Modify Footer Content

1. Find the Footer section in `index.html` (line ~460)
2. Update company name, links, and social media handles

### Add More Sections

To add new sections:

1. Add HTML in `index.html`
2. Add CSS in `style.css` (follow existing patterns)
3. Add JavaScript in `script.js` if needed
4. Follow the existing design patterns for consistency

## 📱 Mobile Optimization

The website is fully responsive. Test on different devices:

- **Desktop**: Full navigation menu, all features visible
- **Tablet**: Optimized spacing, responsive grid
- **Mobile**: Hamburger menu, single column layout

## ♿ Accessibility

The website includes:
- Semantic HTML5 structure
- ARIA labels for screen readers
- Keyboard navigation support
- High contrast mode support
- Focus indicators for keyboard users

## 🔒 Security

- No external scripts or dependencies
- HTTPS ready for GitHub Pages
- No data collection or tracking (optional Google Analytics can be added)
- Content Security Policy ready

## ⚡ Performance Tips

1. **Optimize Images**: Compress images before adding to assets folder
   - Use WebP format when possible
   - Recommended size: < 200KB per image

2. **Caching**: GitHub Pages automatically caches static files

3. **Lazy Loading**: Images are already set up with lazy loading

4. **Minification**: All CSS and JS is already optimized

## 🐛 Troubleshooting

### Site Not Appearing After Push

- Wait 2-3 minutes for GitHub to build
- Check repository is set to Public
- Verify branch is set to `main` in Pages settings
- Check that files are in the root directory

### Links Not Working

- Make sure external URLs include `https://`
- Test links in a new tab to verify they work
- Check for typos in URLs

### Images Not Showing

- Verify image files are in the `assets` folder
- Check image paths in HTML are correct
- Ensure image file names match exactly (case-sensitive)
- Images should be under 1MB for best performance

### Theme Not Saving

- Clear browser cache
- Check if localStorage is enabled
- Try a different browser

## 📊 Analytics (Optional)

To add Google Analytics:

1. Get your Tracking ID from Google Analytics
2. Add this before `</head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_TRACKING_ID');
</script>
```

## 📈 SEO Tips

1. **Meta Descriptions**: Already set in HTML
2. **Social Sharing**: Use OpenGraph tags (already included)
3. **Mobile Friendly**: Fully responsive (tested)
4. **Page Speed**: Optimized (no external dependencies)
5. **Keywords**: Add relevant keywords in meta tags

## 🎯 Next Steps

1. ✅ Extract ZIP file
2. ✅ Add your logo and QR code
3. ✅ Customize colors and content
4. ✅ Test locally in browser
5. ✅ Create GitHub repository
6. ✅ Push files to GitHub
7. ✅ Enable GitHub Pages
8. ✅ Share your website URL

## 💡 Best Practices

- **Regular Updates**: Keep product images and offers updated
- **Mobile Testing**: Test on real devices regularly
- **SEO**: Regularly update meta descriptions
- **Analytics**: Monitor traffic with Google Analytics
- **Backups**: Keep local copy of all files
- **Version Control**: Commit significant changes with messages

## 📞 Support

For common issues and updates:
1. Check GitHub repository for issues
2. Review the deployment steps
3. Test in different browsers
4. Clear cache and try again

## 🎨 Design Credits

- **Font**: Segoe UI, Tahoma, Geneva, Verdana (System fonts - no external load)
- **Icons**: SVG icons (inline - no external libraries)
- **Animations**: Pure CSS3 animations
- **Glassmorphism**: CSS backdrop filter

## 📄 License

This website template is created for AK Collection. Feel free to modify and customize for your business needs.

## 🚀 Version History

- **v1.0** (2026): Initial release with all premium features

---

**Created with ❤️ for AK Collection**

Quality | Style | Trust

For more information, visit: https://www.astore.pk
