function objDiff(obj1, obj2) {
    if (obj1 === obj2) return {};
    if (obj1 === null || obj2 === null) return [obj1, obj2];
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return [obj1, obj2];
    if (Array.isArray(obj1) !== Array.isArray(obj2)) return [obj1,obj2];
    
    let newObj = {};
    
    Object.keys(obj1).forEach(key =>{
        if (key in obj2){
            let subDiff = objDiff(obj1[key], obj2[key]);
            
            if (Object.keys(subDiff).length > 0){
                newObj[key] = subDiff;
            }
        }
    });
    return newObj;
    
};