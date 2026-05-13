// 3_contenido.js

module.exports = {
  sesiones: [
    {
      tema: "Logaritmos",
      grado: "5° Secundaria",
      duracion: "80 minutos",

      motivacion: {
        pregunta: "¿Por qué un sismo de magnitud 8 es más fuerte que uno de 7?",
        contextos: ["Richter", "Decibelios", "pH"]
      },

      saberes_previos: [
        "2³ = ?",
        "5⁰ = ?",
        "10⁴ = ?",
        "2ˣ = 8 → x = ?"
      ],

      conflicto: "¿A qué potencia hay que elevar 10 para obtener 5000?",

      desarrollo: {
        concepto: "log_b N = x ↔ b^x = N",
        ejercicios: ["log₂ 8", "log₃ 81", "log₅ 125"]
      },

      evaluacion: [
        "4³ = 64 → forma logarítmica",
        "log₅ 25 + log₅ 5"
      ],

      metacognicion: [
        "3 cosas aprendidas",
        "2 conexiones",
        "1 duda"
      ]
    }
  ]
};
