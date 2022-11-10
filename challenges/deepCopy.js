const deepCopyFunction = (inObject) => {
  let outObject;

  if (typeof inObject !== "object" || inObject === null) return inObject
    
  outObject = Array.isArray(inObject) ? [] : {}

  for (let key in inObject) outObject[key] = deepCopyFunction(inObject[key])

  return outObject
}
