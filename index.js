function theBeatlesPlay(musicians, instruments){
  var play = []
  for(let i = 0 ; i < musicians.length ; i++){
    play.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return play
}

function johnLennonFacts(facts){
  let i = 0
  while(i < facts.length){
    facts[i] += "!!!"
  }
  return facts
}