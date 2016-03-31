



def isValidPass(pw):
    upa = "QWERTYUIOPASDFGHJKLZXCVBNM"
    lowa = "qwertyuiopasdfghjklzxcvbnm"
    numba = "1234567890"
    hasUpa = [1 if x in upa else 0 for x in pw]
    hasNumba = [1 if x in numba else 0 for x in pw]
    hasLowa = [1 if x in lowa else 0 for x in pw]
    return 1 in hasUpa and 1 in hasNumba and 1 in hasLowa

def passStrength(pw):
    upa = "QWERTYUIOPASDFGHJKLZXCVBNM"
    numba = "1234567890"
    lowa = "qwertyuiopasdfghjklzxcvbnm"
    xtra = ".?!&#,;:-_*$%@"
    scoreLow = [1 if x in lowa else 0 for x in pw]
    scoreUpa = [2 if x in upa else 0 for x in pw]
    scoreNum = [3 if x in numba else 0 for x in pw]
    scoreX = [4 if x in xtra else 0 for x in pw]
    totalScore = (sum(scoreUpa) + sum(scoreLow) +  sum(scoreNum) + sum(scoreX) * 1.0 )
    totalScore = totalScore / (4.0 * len(pw))
    totalScore = totalScore * 10
    print len(pw)
    return totalScore
    
print isValidPass("asdhaskWHEIROWEHQ")
print isValidPass("sdDUQW617")

print passStrength("dsbajWQEWQ423!@")

