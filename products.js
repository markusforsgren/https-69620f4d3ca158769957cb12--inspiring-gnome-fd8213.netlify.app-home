// Produkt-köp funktionalitet
function buyProduct(productId) {
    // Produktinformation
    const products = {
        tshirt: {
            name: 'Tryggman T-shirt',
            price: 299,
            sizes: ['S', 'M', 'L', 'XL', 'XXL']
        },
        cap: {
            name: 'Tryggman Keps',
            price: 249,
            sizes: ['One size']
        },
        hoodie: {
            name: 'Tryggman Hoodie',
            price: 499,
            sizes: ['S', 'M', 'L', 'XL', 'XXL']
        },
        mug: {
            name: 'Tryggman Mugg',
            price: 149,
            sizes: ['33cl']
        },
        zip: {
            name: 'Tryggman Ziptröja',
            price: 549,
            sizes: ['S', 'M', 'L', 'XL', 'XXL']
        }
    };
    
    const product = products[productId];
    
    // Visa storlek-val om flera storlekar
    let size = '';
    if (product.sizes.length > 1) {
        size = prompt(`Välj storlek för ${product.name}:\n${product.sizes.join(', ')}`);
        if (!size || !product.sizes.includes(size.toUpperCase())) {
            alert('Ogiltig storlek. Försök igen.');
            return;
        }
    } else {
        size = product.sizes[0];
    }
    
    // Bekräfta köp
    const confirmed = confirm(
        `Beställning:\n\n` +
        `${product.name}\n` +
        `Storlek: ${size}\n` +
        `Pris: ${product.price} kr\n\n` +
        `Klicka OK för att gå till betalning`
    );
    
    if (confirmed) {
        // TILLFÄLLIG LÖSNING: Email
        // Senare: Stripe payment link
        const email = 'order@tryggman.se'; // Byt till din email
        const subject = `Beställning: ${product.name}`;
        const body = `Jag vill beställa:\n\nProdukt: ${product.name}\nStorlek: ${size}\nPris: ${product.price} kr\n\nMina uppgifter:\nNamn: \nAdress: \nPostnummer och ort: \nTelefon: \n\nBetalsätt: [Swish/Kortbetalning]`;
        
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
}
