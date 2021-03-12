function getMiddle(s)
{
  let mid  = (s.length)/2
 
  if (s.length % 2 == 0){
    return s.slice(mid - 1, mid+ 1)
  }else if (s.length % 2 != 0){
    return s.slice(mid -.5, mid + .5 )
  }
 
}