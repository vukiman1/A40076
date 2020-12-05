// Sort an array alphabetically

function alphabetical(arr) {
  return arr.sort((a,b)=>{ 
      for (var i=0;;i++)
      {
          if(!a.charCodeAt(i).isNaN)
          {
              if(!b.charCodeAt(i).isNaN)
              {
                  if(a.charCodeAt(i)-b.charCodeAt(i)==0)
                    continue;
                  return a.charCodeAt(i)-b.charCodeAt(i);
              }
              else break;
          }
          else break;
      }
  });
}