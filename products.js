// Produkt-köp funktionalitet
function buyProduct(productId) {
    // Produktinformation
    const products = {
        tshirt: {
            name: 'Tryggman T-shirt',
            price: 129,
            sizes: ['S', 'M', 'L', 'XL', 'XXL']
        },
        cap: {
            name: 'Tryggman Keps',
            price: 199,
            sizes: ['One size']
        },
        hoodie: {
            name: 'Tryggman Hoodie',
            price: 299,
            sizes: ['S', 'M', 'L', 'XL', 'XXL']
        },
        mug: {
            name: 'Tryggman Mugg',
            price: 149,
            sizes: ['33cl']
        },
        zip: {
            name: 'Tryggman Ziptröja',
            price: 349,
            sizes: ['S', 'M', 'L', 'XL', 'XXL']
        }
    };
    
    const product = products[productId];
    
    if (!product) {
        alert('Produkt ej hittad');
        return;
    }
    
    // Visa storlek-val om flera storlekar
    let size = '';
    if (product.sizes.length > 1) {
        size = prompt(`Välj storlek för ${product.name}:\n\n${product.sizes.join(', ')}\n\nSkriv din storlek:`);
        
        if (!size) {
            return; // Användaren avbröt
        }
        
        size = size.toUpperCase().trim();
        
        if (!product.sizes.includes(size)) {
            alert('Ogiltig storlek. Försök igen.');
            return;
        }
    } else {
        size = product.sizes[0];
    }
    
    // Bekräfta köp
    const confirmed = confirm(
        `📦 BESTÄLLNING\n\n` +
        `Produkt: ${product.name}\n` +
        `Storlek: ${size}\n` +
        `Pris: ${product.price} kr\n\n` +
        `Klicka OK för att skicka beställning via email`
    );
    
    if (confirmed) {
        // Skapa email-beställning
        const email = 'kontakt@tryggman.se';
        const subject = `Beställning: ${product.name}`;
        const body = `Hej Tryggman!\n\nJag vill beställa:\n\nProdukt: ${product.name}\nStorlek: ${size}\nPris: ${product.price} kr\n\n--- Mina uppgifter ---\nNamn: \nAdress: \nPostnummer: \nOrt: \nTelefon: \nEmail: \n\nBetalsätt: [Swish/Kortbetalning]\n\nMvh`;
        
        // Öppna email-klient
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
}

console.log('Products.js loaded successfully!');
