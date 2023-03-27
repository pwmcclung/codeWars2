function solution([mass1,mass2,dist], [unitMass1,unitMass2, unitDist]){
  let gravity = 6.67e-11;
   let factorDict = { kg:1, g:1e-3, mg:1e-6, μg:1e-9, lb:0.453592, m:1, cm:1e-2, mm:1e-3, μm:1e-6, ft:0.3048};
  let calc = gravity * mass1 * factorDict[unitMass1] * mass2 * factorDict[unitMass2] / (dist* factorDict[unitDist]) ** 2;
  return calc
}
