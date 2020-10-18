function hascollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x + lbullet.width/2;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;

  }
  else
  {
  return false;
}
}