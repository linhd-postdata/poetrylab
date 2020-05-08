const API_ROOT = process.env.REACT_APP_API_ROOT || "http://localhost:5000/";
const POEM_TITLE = "El Príncipe constante";
const POEM_TEXT =
`Éstas que fueron pompa y alegría
despertando al albor de la maña-
na, a la tarde serán lástima vana
durmiendo en brazos de la noche fría.

Este matiz que al cielo desafía,
Iris listado de oro, nieve y grana,
será escarmiento de la vida humana:
¡tanto se emprende en término de un día!

A florecer las rosas madrugaron,
y para envejecerse florecieron:
cuna y sepulcro en un botón hallaron.

Tales los hombres sus fortunas vieron:
en un día nacieron y espiraron;
que pasados los siglos horas fueron.`

export default {
    API_ROOT, POEM_TITLE, POEM_TEXT
}
