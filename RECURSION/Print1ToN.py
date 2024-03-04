 
#print 1-n using recursion

def PrintNum(start,n):
    if start==n:
        print(n)
        return n;
    print(start)
    return PrintNum(start+1,n)


n = 10;
start = 1;

PrintNum(start,n)



