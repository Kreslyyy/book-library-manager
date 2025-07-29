import { Book } from '../models/Book';
export class LibraryService {
    private books: Book[] = [];
    addBook(book: Book) {
        this.books.push(book);
    }
    deleteBook(title: string, author: string) {
        for (const b of this.books) {
            if (b.author === author && b.title === title) {
                const index = this.books.indexOf(b)
                this.books.splice(index, 1);
                break;
            }
        }
    }
    bookIsRead(book: Book) {
        for (const b of this.books) {
            if (b.id === book.id) {
                b.isRead = true;
            }
        }
    }
    printBookInfo(book: Book) {
        console.log(`Название: ${book.title}\nАвтор: ${book.author}\nСтатус книги: ${book.isRead ? 'прочитана' : 'не прочитана'}`);
    }
    showAllBooks() {
        console.log('Список всех книг:');
        for (const b of this.books) {
            this.printBookInfo(b);
        }
    }
    filterBooks(status: boolean) {
        if (status) {
            console.log('Прочитанные книги: ')
        } else {
            console.log('Не прочитанные книги: ')
        }
        for (const b of this.books) {
            if (b.isRead === status) {
                this.printBookInfo(b);
            }
        }
    }
    searchByTitle(title: string) {
        for (const b of this.books) {
            if (b.title.toLowerCase() === title.toLowerCase()) {
                this.printBookInfo(b);
            }
        }
    }
    searchByAuthor(author: string) {
        for (const b of this.books) {
            if (b.author.toLowerCase() === author.toLowerCase()) {
                this.printBookInfo(b);
            }
        }
    }
}