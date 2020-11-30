# TP liste d'utilisateurs

## Analyse de code

Analysez le [code situé du projet](https://codesandbox.io/s/react-props-list-from-file-wqwn5) puis répondez aux questions.


**1. Quelle ligne charge le fichier JSON dans le code ?**  
```js 
import users from "./Users.json";
```

**2. Quelle est la structure de données du fichier JSON ?**  
C'est un objet qui contient d'autre objet. On peut accéder aux infos d'un Json avec `json_file.result = {}`

**3. Justifiez le `User.propTypes`. Quelles données ne sont pas prises en compte ?**  
Ca permet de controller le typage des props. 

**4. Quelles données sont obligatoires pour construire le composant `User` ?**  
Les données du fichier Json

**5. A quoi correspond `PropTypes.shape` ?**  
Il permet de definir une props d'un objet dont les clés sont connues

**6. Pourquoi l'attribut contient deux accolades ?**  
Parce que c'est un objet

**7. Quel est le nom de l'opérateur qui transmet les données du composant `App` vers le composant `User`? Pourquoi est-ce dangereux d'abuser de cet opérateur ?**   
Destructuring, c'est dangereux de l'utiliser parce que l'on passe un Json avec beaucoup d'info et on en utilise même pas la moitier. Risque de difficulté de debug si l'on créer d'autre composants enfants

**8. Ajoutez un paragraphe `p` au composant `User` pour afficher la date de naissance sous la forme "Né le 27/02/1942" pour un homme ou "Née le 27/02/1942" pour une femme en utilisant une condition ternaire. Copiez le code ajouté dans ce document en guise de réponse.**

```js
<p>
  {props.gender === "male" ? <p> Né le {new Date(props.dob.date).toLocaleDateString()} </p> : <p> Née le {new Date(props.dob.date).toLocaleDateString()}</p>}
</p>
```

## Rédaction de tests
**9. Lisez [les recettes de tests](https://fr.reactjs.org/docs/testing-recipes.html#gatsby-focus-wrapper). Rédigez un test pour vérifier que le composant `User` contient une image.**

**10. Rédigez un autre test dans lequel vous créez le composant `User` avec le `name` de votre choix dans le `props` et vérifiez que le composant affiche bien le `name`.**

**11. Faites un test de "capture d'instantanés" en suivant les indications de la documentation**

**12. Proposez 3 autres tests**


## Mini-projet 

[Téléchargez une liste de films sous le format d'un fichier JSON](https://imdb-api.com/). Cela vous demandera de créer un compte.

**13. Créez un nouveau projet et affichez les films sous la forme de cartes. Vous devrez soigner le design de la page, sans copiant le code de la liste d'utilisateurs**
