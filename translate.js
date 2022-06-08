var en2es = {};
en2es.dict = await fetch('https://raw.githubusercontent.com/Unzor/es2en/main/words.json');
en2es.dict = await en2es.dict.json();
en2es.toSpanish = (w) => {
  return en2es.dict[w];
};
