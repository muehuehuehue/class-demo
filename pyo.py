# class A:

#     def hello(self):
#         print("hello class A")
# class B:
#     def hello(self):
#         print("hello class B")
# class C(A, B):
#     def __init__(self):
#         pass

# C().hello()

from abc import ABC, abstractmethod
class shape(ABC):
    @abstractmethod
    def area(self):
        pass
class rectangle(shape):
    def __init__(self, l, b):
        self.length = l
        self.breadth = b
    def area(self):
        return self.length * self.breadth

rec = rectangle(10, 20)
print(rec.area())



