import time


def timer( f ):
   def inner( *arg ):
   		start = time.time()
		f( *arg )
		print time.time() - start
   return inner
#closure = wrapper(foo)

def args( f ):
	def inner( *arg ):
		print f.func_name + ": " + str(arg)
		f(*arg)
	return inner

@args
@timer
def foo(a):
	while a > 0:
		a = a - 1
	return


foo(3)
foo(30000)
foo(44324)