def encontrar_permutaciones(x1, y1, x2, y2, camino):
    if x1 == x2 and y1 == y2:
        print(camino)
        return
    
    if x1 < x2:
        encontrar_permutaciones(x1 + 1, y1, x2, y2, camino + 'R')
    if y1 < y2:
        encontrar_permutaciones(x1, y1 + 1, x2, y2, camino + 'U')

X1, Y1 = 2, 1
X2, Y2 = 7, 4
encontrar_permutaciones(X1, Y1, X2, Y2, '')
