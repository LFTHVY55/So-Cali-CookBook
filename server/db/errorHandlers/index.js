function handleUniqueKeyErrors(error, field) {
  if (error.code === '23505') {
    throw { message: `${field} already exists.`, status: 400 };
  } else {
    throw error;
  }
}


module.exports = {
  handleUniqueKeyErrors
}