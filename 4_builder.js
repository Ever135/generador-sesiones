// 4_builder.js

const { Document, Packer } = require("docx");
const fs = require("fs");

const { p, h2, h3 } = require("./2_helpers");
const data = require("./3_contenido");

function buildSession(s) {
  return new Document({
    sections: [{
      children: [
        h2(`SESIÓN: ${s.tema}`),
        p(`Grado: ${s.grado}`),
        p(`Duración: ${s.duracion}`),

        h3("Motivación"),
        p(s.motivacion.pregunta),

        h3("Saberes previos"),
        p(s.saberes_previos.join(" | ")),

        h3("Conflicto cognitivo"),
        p(s.conflicto),

        h3("Desarrollo"),
        p(s.desarrollo.concepto),
        p(s.desarrollo.ejercicios.join(" | ")),

        h3("Evaluación"),
        p(s.evaluacion.join(" | ")),

        h3("Metacognición"),
        p(s.metacognicion.join(" | "))
      ]
    }]
  });
}

// generar N sesiones
data.sesiones.forEach((s, i) => {
  Packer.toBuffer(buildSession(s)).then(buffer => {
    fs.writeFileSync(`output/sesion_${i + 1}_${s.tema}.docx`, buffer);
  });
});
