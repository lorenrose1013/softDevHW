def repeat(string):
    return lambda y: string * y

r1 = repeat("hello")
print r1(1)
print r1(2)


r2 = repeat("goodbye")
print r2(2)

print repeat("cool")(3) 


#Q1: How would you explain to your ducky what this Scheme code does?
#(lambda (a b) (+ a b))
#this is an anon function that adds the two arguments given

#Q2: How would you explain to your ducky what this Scheme code does?
#(define foo (lambda (a b) (+ a b)))
#this is a named function that adds two given args


#Q3: Which of the four h() calls above would you say also created closures?
#def h(x):
#    return lambda y: x + y
#h(1)
#h(2)
#h(1)(3)
#h(2)(5)
#the first two functions create the closures, the second two use them as funcs

