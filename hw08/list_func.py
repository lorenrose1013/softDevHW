def symDiff(a, b):
    i = [x for x in a if x not in b]
    j = [x for x in b if x not in a]
    return i + j

def intersection(a, b):
    return [x for x in a if x in b] 

def union(a, b):
    return a + [x for x in b if x not in a]

def cart_prod(a, b):
    return [(x,y) for x in a for y in b]

def set_diff(a, b):
    return [x for x in a if x not in b]
