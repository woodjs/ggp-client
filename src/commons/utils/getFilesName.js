/**
 * Функция возвращает имя файла или нескольких файлов
 * @param {FileList} files - список файлов
 * @returns {string} - имя файла или нескольких файлов
 */
const getFilesName = (files) => {
  let name = 'Выберите файлы';
  if (!files) return name;
  if (!files?.length) return name;
  name = files.item(0).name;
  if (name.length > 20) {
    name = `${name.slice(0, 10)}...${name.slice(-6)}`;
  }
  if (files.length === 1) return name;
  return `${name} и еще ${files.length - 1}`;
};
export default getFilesName;
