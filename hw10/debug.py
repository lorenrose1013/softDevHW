import time
from functools import wraps

def debug_info( f ):
    @wraps(f)
    def inner( *args ):
        start = time.time()
        result = f(*args)
        end = time.time()
        print f.func_name + " : " + str(args) + " : " + str(end - start)
        return result
    return inner

