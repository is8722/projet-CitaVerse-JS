const quotes = [
    { content: "Le succès n'est pas la clé du bonheur. Le bonheur est la clé du succès. Si vous aimez ce que vous faites, vous réussirez.", author: "Albert Schweitzer" },
    { content: "Ne jugez pas chaque jour par la récolte que vous récoltez, mais par les graines que vous plantez.", author: "Robert Louis Stevenson" },
    { content: "Votre temps est limité, ne le gâchez pas en vivant la vie de quelqu'un d'autre.", author: "Steve Jobs" },
    { content: "La seule limite à notre réalisation de demain seront nos doutes d'aujourd'hui.", author: "Franklin D. Roosevelt" },
    { content: "Le meilleur moment pour planter un arbre était il y a 20 ans. Le deuxième meilleur moment est maintenant.", author: "Proverbe chinois" },
    { content: "Le succès consiste à passer d'échec en échec sans perdre son enthousiasme.", author: "Winston Churchill" },
    { content: "La vie est 10 % ce qui nous arrive et 90 % comment nous y réagissons.", author: "Charles R. Swindoll" },
    { content: "Votre potentiel est infini. Allez-y, prenez-le, faites-en quelque chose de grand.", author: "Inconnu" },
    { content: "Ne cherchez pas des circonstances pour lesquelles vous ne seriez pas prêt. Rendez-vous prêt pour des circonstances que vous souhaitez atteindre.", author: "Inconnu" },
    { content: "Les défis sont ce qui rend la vie intéressante et les surmonter est ce qui lui donne du sens.", author: "Joshua J. Marine" },
    { content: "Le succès est la somme de petits efforts répétés jour après jour.", author: "Robert Collier" },
    { content: "Si vous voulez atteindre l'excellence, vous pouvez vous y attendre. Si vous voulez atteindre la médiocrité, vous pouvez vous y attendre aussi.", author: "Thomas J. Watson Sr." },
    { content: "Le moment où vous êtes prêt à abandonner est généralement le moment où le miracle se produit.", author: "Inconnu" },
    { content: "La plus grande gloire n'est pas de ne jamais tomber, mais de se relever à chaque chute.", author: "Confucius" },
    { content: "N'abandonnez jamais ce que vous voulez vraiment faire. Là où il y a de l'amour et de l'inspiration, vous ne pouvez pas vous tromper.", author: "Ella Fitzgerald" },
    { content: "L'avenir appartient à ceux qui croient en la beauté de leurs rêves.", author: "Eleanor Roosevelt" },
    { content: "La motivation vous pousse à commencer et l'habitude vous permet de continuer.", author: "Jim Ryun" },
    { content: "Le succès n'est pas fini, l'échec n'est pas fatal : c'est le courage de continuer qui compte.", author: "Winston Churchill" },
    { content: "C'est dans les moments de décision que votre destin est forgé.", author: "Tony Robbins" },
    { content: "Ce n'est pas ce que vous regardez qui importe, c'est ce que vous voyez.", author: "Henry David Thoreau" },
    { content: "L'impossible est souvent ce que l'on n'a pas encore essayé.", author: "Jean-Louis Étienne" },
    { content: "Le succès ne consiste pas à ne jamais échouer, mais à ne jamais se décourager.", author: "Paulo Coelho" },
    { content: "Le plus grand risque est de ne prendre aucun risque.", author: "Mark Zuckerberg" },
    { content: "La seule personne que vous êtes destiné à devenir est celle que vous décidez d'être.", author: "Ralph Waldo Emerson" },
    { content: "Le futur appartient à ceux qui croient en la beauté de leurs rêves.", author: "Eleanor Roosevelt" },
    { content: "Ne craignez pas d'échouer. Craignez plutôt de ne pas essayer.", author: "Roy T. Bennett" },
    { content: "Vos limites sont votre esprit.", author: "Napoleon Hill" },
    { content: "Ne demandez pas ce dont le monde a besoin. Demandez ce qui vous fait vivre et agissez en conséquence, car ce dont le monde a besoin, c'est de personnes qui sont vivantes.", author: "Howard Thurman" },
    { content: "Tout ce que vous pouvez imaginer est réel.", author: "Pablo Picasso" },
    { content: "Le futur appartient à ceux qui croient en la beauté de leurs rêves.", author: "Eleanor Roosevelt" },
    { content: "L'impossible est souvent ce que l'on n'a pas encore essayé.", author: "Jean-Louis Étienne" },
    { content: "Ne demandez pas ce que le monde a besoin. Demandez ce qui vous fait vivre et agissez en conséquence, car ce dont le monde a besoin, c'est de personnes qui sont vivantes.", author: "Howard Thurman" },
    { content: "Vos limites sont votre esprit.", author: "Napoleon Hill" },
    { content: "La vie est courte, et elle devient plus courte encore si on la gâche.", author: "Charlie Chaplin" },
    { content: "C'est dans les moments de décision que votre destin est forgé.", author: "Tony Robbins" },
    { content: "Ne vous découragez jamais. Souvenez-vous que c'est souvent la dernière clé du trousseau qui ouvre la porte.", author: "Zig Ziglar" },
    { content: "Si vous ne l'avez pas encore fait, vous ne l'avez pas encore fait.", author: "Bill Gates" },
    { content: "Le seul moyen de faire du bon travail est d'aimer ce que vous faites.", author: "Steve Jobs" },
    { content: "La motivation vous pousse à commencer et l'habitude vous permet de continuer.", author: "Jim Ryun" },
    { content: "La meilleure façon de prédire l'avenir est de le créer.", author: "Peter Drucker" },
    { content: "Le succès n'est pas la clé du bonheur. Le bonheur est la clé du succès. Si vous aimez ce que vous faites, vous réussirez.", author: "Albert Schweitzer" },
    { content: "Ne jugez pas chaque jour par la récolte que vous récoltez, mais par les graines que vous plantez.", author: "Robert Louis Stevenson" },
    { content: "Votre temps est limité, ne le gâchez pas en vivant la vie de quelqu'un d'autre.", author: "Steve Jobs" },
    { content: "La seule limite à notre réalisation de demain seront nos doutes d'aujourd'hui.", author: "Franklin D. Roosevelt" },
    { content: "Le succès ne consiste pas à ne jamais échouer, mais à ne jamais se décourager.", author: "Paulo Coelho" },
    { content: "Le plus grand risque est de ne prendre aucun risque.", author: "Mark Zuckerberg" },
    { content: "La seule personne que vous êtes destiné à devenir est celle que vous décidez d'être.", author: "Ralph Waldo Emerson" },
    { content: "Le futur appartient à ceux qui croient en la beauté de leurs rêves.", author: "Eleanor Roosevelt" },
    { content: "Ne craignez pas d'échouer. Craignez plutôt de ne pas essayer.", author: "Roy T. Bennett" },
    { content: "Tout ce que vous pouvez imaginer est réel.", author: "Pablo Picasso" },
    { content: "Le futur appartient à ceux qui croient en la beauté de leurs rêves.", author: "Eleanor Roosevelt" },
    { content: "L'impossible est souvent ce que l'on n'a pas encore essayé.", author: "Jean-Louis Étienne" },
    { content: "Ne demandez pas ce dont le monde a besoin. Demandez ce qui vous fait vivre et agissez en conséquence, car ce dont le monde a besoin, c'est de personnes qui sont vivantes.", author: "Howard Thurman" },
    { content: "Vos limites sont votre esprit.", author: "Napoleon Hill" },
    { content: "La vie est courte, et elle devient plus courte encore si on la gâche.", author: "Charlie Chaplin" },
    { content: "C'est dans les moments de décision que votre destin est forgé.", author: "Tony Robbins" },
    { content: "Ne vous découragez jamais. Souvenez-vous que c'est souvent la dernière clé du trousseau qui ouvre la porte.", author: "Zig Ziglar" },
    { content: "Si vous ne l'avez pas encore fait, vous ne l'avez pas encore fait.", author: "Bill Gates" },
    { content: "Le seul moyen de faire du bon travail est d'aimer ce que vous faites.", author: "Steve Jobs" },
    { content: "Les défis sont ce qui rend la vie intéressante et les surmonter est ce qui lui donne du sens.", author: "Joshua J. Marine" },
    { content: "Le succès est la somme de petits efforts répétés jour après jour.", author: "Robert Collier" },
    { content: "Si vous voulez atteindre l'excellence, vous pouvez vous y attendre. Si vous voulez atteindre la médiocrité, vous pouvez vous y attendre aussi.", author: "Thomas J. Watson Sr." },
    { content: "Le moment où vous êtes prêt à abandonner est généralement le moment où le miracle se produit.", author: "Inconnu" },
    { content: "La plus grande gloire n'est pas de ne jamais tomber, mais de se relever à chaque chute.", author: "Confucius" },
    { content: "N'abandonnez jamais ce que vous voulez vraiment faire. Là où il y a de l'amour et de l'inspiration, vous ne pouvez pas vous tromper.", author: "Ella Fitzgerald" },
    { content: "L'avenir appartient à ceux qui croient en la beauté de leurs rêves.", author: "Eleanor Roosevelt" },
    { content: "La motivation vous pousse à commencer et l'habitude vous permet de continuer.", author: "Jim Ryun" },
    { content: "Le succès n'est pas fini, l'échec n'est pas fatal : c'est le courage de continuer qui compte.", author: "Winston Churchill" },
    { content: "Ce n'est pas ce que vous regardez qui importe, c'est ce que vous voyez.", author: "Henry David Thoreau" },
    { content: "L'impossible est souvent ce que l'on n'a pas encore essayé.", author: "Jean-Louis Étienne" },
    { content: "Le succès ne consiste pas à ne jamais échouer, mais à ne jamais se décourager.", author: "Paulo Coelho" },
    { content: "Le plus grand risque est de ne prendre aucun risque.", author: "Mark Zuckerberg" },
    { content: "La seule personne que vous êtes destiné à devenir est celle que vous décidez d'être.", author: "Ralph Waldo Emerson" },
    { content: "Ne craignez pas d'échouer. Craignez plutôt de ne pas essayer.", author: "Roy T. Bennett" },
    { content: "Vos limites sont votre esprit.", author: "Napoleon Hill" },
    { content: "Ne demandez pas ce que le monde a besoin. Demandez ce qui vous fait vivre et agissez en conséquence, car ce dont le monde a besoin, c'est de personnes qui sont vivantes.", author: "Howard Thurman" },
    { content: "Tout ce que vous pouvez imaginer est réel.", author: "Pablo Picasso" },
    { content: "L'impossible est souvent ce que l'on n'a pas encore essayé.", author: "Jean-Louis Étienne" },
    { content: "Ne demandez pas ce que le monde a besoin. Demandez ce qui vous fait vivre et agissez en conséquence, car ce dont le monde a besoin, c'est de personnes qui sont vivantes.", author: "Howard Thurman" },
    { content: "Vos limites sont votre esprit.", author: "Napoleon Hill" },
    { content: "C'est dans les moments de décision que votre destin est forgé.", author: "Tony Robbins" },
    { content: "Le seul moyen de faire du bon travail est d'aimer ce que vous faites.", author: "Steve Jobs" },
    { content: "La motivation vous pousse à commencer et l'habitude vous permet de continuer.", author: "Jim Ryun" },
    { content: "Ce n'est pas ce que vous regardez qui importe, c'est ce que vous voyez.", author: "Henry David Thoreau" },
    { content: "L'impossible est souvent ce que l'on n'a pas encore essayé.", author: "Jean-Louis Étienne" },
    { content: "Le plus grand risque est de ne prendre aucun risque.", author: "Mark Zuckerberg" },
    { content: "La seule personne que vous êtes destiné à devenir est celle que vous décidez d'être.", author: "Ralph Waldo Emerson" },
    { content: "Ne craignez pas d'échouer. Craignez plutôt de ne pas essayer.", author: "Roy T. Bennett" },
    { content: "Vos limites sont votre esprit.", author: "Napoleon Hill" },
    { content: "Ne demandez pas ce dont le monde a besoin. Demandez ce qui vous fait vivre et agissez en conséquence, car ce dont le monde a besoin, c'est de personnes qui sont vivantes.", author: "Howard Thurman" },
    { content: "Tout ce que vous pouvez imaginer est réel.", author: "Pablo Picasso" },
    { content: "Le futur appartient à ceux qui croient en la beauté de leurs rêves.", author: "Eleanor Roosevelt" },
    { content: "L'impossible est souvent ce que l'on n'a pas encore essayé.", author: "Jean-Louis Étienne" },
    { content: "Ne demandez pas ce que le monde a besoin. Demandez ce qui vous fait vivre et agissez en conséquence, car ce dont le monde a besoin, c'est de personnes qui sont vivantes.", author: "Howard Thurman" },
    { content: "Vos limites sont votre esprit.", author: "Napoleon Hill" },
    { content: "La vie est courte, et elle devient plus courte encore si on la gâche.", author: "Charlie Chaplin" },
    { content: "Ne vous découragez jamais. Souvenez-vous que c'est souvent la dernière clé du trousseau qui ouvre la porte.", author: "Zig Ziglar" },
    { content: "Si vous ne l'avez pas encore fait, vous ne l'avez pas encore fait.", author: "Bill Gates" },
    { content: "Le seul moyen de faire du bon travail est d'aimer ce que vous faites.", author: "Steve Jobs" },
    { content: "La motivation vous pousse à commencer et l'habitude vous permet de continuer.", author: "Jim Ryun" }
    

    ];
    
    const quoteElement = document.getElementById("quote");
    const generateButton = document.getElementById("generate");
    const styleSelect = document.getElementById("style-select");
    const customQuoteInput = document.getElementById("custom-quote");
    const addQuoteButton = document.getElementById("add-quote");
    const customQuoteList = document.getElementById("custom-quote-list");
    
    generateButton.addEventListener("click", generateQuote);
    styleSelect.addEventListener("change", changeQuoteStyle);
    addQuoteButton.addEventListener("click", addCustomQuote);
    
    function generateQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        quoteElement.innerHTML = `"${randomQuote.content}" - ${randomQuote.author}`;
    }
    
    function changeQuoteStyle() {
        const selectedStyle = styleSelect.value;
        quoteElement.className = selectedStyle;
    }
    
    function addCustomQuote() {
        const customQuote = customQuoteInput.value;
        if (customQuote) {
            const customAuthor = "Utilisateur personnalisé";
            quotes.push({ content: customQuote, author: customAuthor });
            customQuoteInput.value = "";
            alert("Citation ajoutée avec succès !");
            
            const listItem = document.createElement("li");
            listItem.textContent = `"${customQuote}" - ${customAuthor}`;
            customQuoteList.appendChild(listItem);
        } else {
            alert("Veuillez entrer une citation valide.");
        }
    }
    

    function addCustomQuote() {
        const customQuote = customQuoteInput.value;
        if (customQuote) {
            const customAuthor = "Utilisateur personnalisé";
            quotes.push({ content: customQuote, author: customAuthor });
            customQuoteInput.value = "";
            alert("Citation ajoutée avec succès !");
            
            const listItem = document.createElement("li");
            listItem.textContent = `"${customQuote}" - ${customAuthor}`;
            
           
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Supprimer";
            deleteButton.addEventListener("click", function() {
                customQuoteList.removeChild(listItem);
                removeCustomQuote(customQuote, customAuthor);
            });
            
            listItem.appendChild(deleteButton);
            customQuoteList.appendChild(listItem);
        } else {
            alert("Veuillez entrer une citation valide.");
        }
    }
    function removeCustomQuote(quote, author) {
        const index = quotes.findIndex(item => item.content === quote && item.author === author);
        if (index !== -1) {
            quotes.splice(index, 1);
            alert("Citation supprimée avec succès !");
        }
    }
    

    generateQuote();
    