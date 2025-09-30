
---

## 2️⃣ spec.md (GitHub ready)

```markdown
# Spécifications de l’application Todo App

## Objectif
Créer une application web interactive pour gérer des tâches avec :
- Ajout, suppression, marquage terminée
- Sauvegarde locale pour persistance
- Expérience mobile-friendly et animations visuelles

## Fonctionnalités principales

1. **Login**
   - Input : nom complet
   - Stockage du nom dans `localStorage`
   - Redirection vers `todo.html`

2. **Todo List**
   - Ajouter une tâche → Enter ou bouton Ajouter
   - Supprimer tâche → bouton ❌ ou swipe gauche sur mobile
   - Marquer tâche terminée → clic ou swipe droite sur mobile
   - Filtre : Toutes / Actives / Terminées
   - Effacer toutes les tâches terminées

3. **Interface et design**
   - Post-it flottants avec rotation aléatoire
   - Dégradé animé en fond
   - Dark mode persisté dans localStorage
   - Responsive : adapté mobile/tablette/desktop

4. **Raccourcis clavier**
   - Enter : ajouter une tâche
   - Delete : supprimer la dernière tâche

5. **Stockage**
   - Toutes les tâches et l’état dark mode sont persistés dans `localStorage`

## Structure des fichiers

| Fichier       | Description                                   |
|---------------|-----------------------------------------------|
| index.html    | Page de login                                 |
| todo.html     | Page principale Todo List                     |
| style.css     | Styles, animations, responsive, dark mode    |
| script.js     | Logique JS : login, todo, swipe, filtres     |
| README.md     | Documentation et instructions                |
| spec.md       | Spécifications fonctionnelles et techniques |

## Flux utilisateur
1. Page login → Entrer nom complet → Redirection vers todo.html
2. Ajouter / supprimer / compléter des tâches
3. Filtrer par état
4. Activer dark mode
5. Rafraîchir page → tâches et thème persistants
6. Logout → retour page login

## Contraintes techniques
- **Technologies** : HTML, CSS, JavaScript pur
- **Compatibilité navigateur** : Chrome, Firefox, Edge, Safari
- **Responsive** : mobile et tablette
- **Stockage local uniquement** : `localStorage`
- **Animations CSS et JS uniquement**

## Tests et validation
- Vérifier ajout, suppression et marquage
- Vérifier persistance des tâches et du thème
- Vérifier responsive et swipe sur mobile
- Vérifier raccourcis clavier
- Vérifier filtre toutes / actives / terminées
