def repeat(string):
    return lambda y: string * y

r1 = repeat("hello")
print r1(1)
print r1(2)


r2 = repeat("goodbye")
print r2(2)

print repeat("cool")(3) 
