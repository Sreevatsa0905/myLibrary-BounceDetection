function Bounce(a,b)
{
  if(Math.abs(a.x-b.x)<=b.width/2+a.width/2 && Math.abs(a.y-b.y)<=b.height/2+a.height/2  )
  {
    a.velocityX=-a.velocityX;
    a.velocityY=-a.velocityY;
    b.velocityX=-b.velocityX;
    b.velocityY=-b.velocityY;
  }
    
}