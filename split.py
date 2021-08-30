def partition(list1, classifier_method):
    t = ()
    list2 = []
    fnl_list1 = list(filter(classifier_method , list1)) 
    for i in list1:
            if(i not in fnl_list1):
                list2.append(i)
    t = (fnl_list1,list2)
    return t