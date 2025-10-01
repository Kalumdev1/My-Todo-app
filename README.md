# Todo App Interactive

Une application web simple de gestion de tâches, moderne et mobile-friendly, développée uniquement avec **HTML, CSS et JavaScript**.  

### Fonctionnalités principales
- Login avec nom complet
- Todo List avec **post-it flottants et animations**
- Dark mode et sauvegarde dans le **localStorage**
- Filtre : Toutes / Actives / Terminées
- Suppression avec animation et confirmation
- **Raccourcis clavier** : Enter pour ajouter, Delete pour supprimer
- **Swipe sur mobile** : gauche pour supprimer, droite pour marquer terminée
- Responsive et mobile-friendly

### Démo en ligne
https://kalumdev1.github.io/My-Todo-app/

### Installation
1. Cloner le projet :
```bash
git clone https://github.com/Kalumdev1/My-Todo-app.git
Ouvrir index.html dans un navigateur web moderne.

Utilisation
Entrez votre nom complet sur la page login.

Ajoutez une tâche dans l’input et cliquez sur Ajouter ou appuyez sur Enter.

Cliquez sur une tâche pour la marquer terminée.

Cliquez sur ❌ pour supprimer une tâche.

Utilisez les filtres pour afficher toutes / actives / terminées.

Cliquez sur Effacer les terminées pour supprimer toutes les tâches complétées.

Activez le dark mode via l’icône lune/soleil.

Sur mobile : swipe gauche pour supprimer, swipe droite pour terminer.

Structure du projet

todo-app/
├─ index.html       # Page de login
├─ todo.html        # Page Todo List
├─ style.css        # Styles et animations
├─ script.js        # Logique JS (todo, login, swipe, dark mode)
├─ README.md        # Documentation
└─ spec.md          # Spécifications fonctionnelles

Tests
Ajouter, supprimer et compléter des tâches

Rafraîchir la page → vérifier que les tâches persistent

Dark mode → persistant après rechargement

Raccourcis clavier fonctionnent

Swipe sur mobile fonctionne

Améliorations possibles
Notifications toast pour ajout/suppression

Catégories de tâches

Partage de liste entre utilisateurs

Synchronisation cloud (Firebase / API)


