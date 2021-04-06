const splitWord = (str, len) => {
  const size = Math.ceil(str.length / len);
  let arr = Array.from(size);
  let offset = 0;

  for (let i = 0; i < size; i++) {
    arr[i] = str.substr(offset, len);
    offset += len;
  }
  return arr;
};

export default splitWord;
