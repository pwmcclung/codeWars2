'''Bitmap message.
Displays a text message according to the provided bitmap image.'''

import sys

# !Try changing the multiline string to any image you like
bitmap = """
....................................................................
   **************   *  *** **  *      ******************************
  ********************* ** ** *  * ****************************** *
 **      *****************       ******************************
          *************          **  * **** ** ************** *
           *********            *******   **************** * *
            ********           ***************************  *
   *        * **** ***         *************** ******  ** *
               ****  *         ***************   *** ***  *
                 ******         *************    **   **  *
                 ********        *************    *  ** ***
                   ********         ********          * *** ****
                   *********         ******  *        **** ** * **
                   *********         ****** * *           *** *   *
                     ******          ***** **             *****   *
                     *****            **** *            ********
                    *****             ****              *********
                    ****              **                 *******   *
                    ***                                       *    *
                    **     *                    *
...................................................................."""
print('Bitmap Message')
print('Enter the message you want to display with the bitmap.')
message = input('> ')
if message == '':
    sys.exit()

# loop over each line in the bitmap:
for line in bitmap.splitlines():
    # loop over each character in the line:
    for i, bit in enumerate(line):
        if bit == ' ':
            #print an empty space since there's a space in the bitmap:
            print(' ', end='')
        else:
            # print a character from the message:
            print(message[i % len(message)], end='')

    print()  #Print a newline.

