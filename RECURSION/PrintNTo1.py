def PrintReverse(start,n):
    if n==start:
        print(n)
        return n
    
    print(n)
    PrintReverse(start,n-1)
    

n = 10;
start  =1;

PrintReverse(start,n)