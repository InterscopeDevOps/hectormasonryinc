const EliminarCaracteresEspeciales = (text: string) => {
    return text
        .toLowerCase()
        .trim() // Mover trim() aquí para asegurarse que los espacios al inicio/final se eliminen primero
        .replace(/[\s']+/g, "-") // Asegura reemplazar todos los espacios y comillas simples por guiones de forma global
        .replace(/[^\w-]+/g, ""); // Elimina todos los caracteres que no sean palabras o guiones
};

export default EliminarCaracteresEspeciales;