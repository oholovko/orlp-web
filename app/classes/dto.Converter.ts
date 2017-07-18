import {CategoryTop} from "./top.category.DTO";
import {Link} from "./link";
import {CategoryLink} from "./link.category.DTO";
import {DeckPublic} from "./public.deck.DTO";
import {CoursePublic} from "./public.course.DTO";
import {link} from "fs";
import {CategoriesPublic} from "./public.categories";
import {CourseTop} from "./top.course.DTO";

export class DTOConverter {

    public static jsonToPublicCourse(data: any): CoursePublic {
        let self: Link = DTOConverter.jsonToLink("self", data._links.self);

        return new CoursePublic(data.name, data.description, data.imagebase64, self);
    }

    public static jsonToPublicDeck(data: any): DeckPublic {
        let self: Link = DTOConverter.jsonToLink("self", data._links.self);

        return new DeckPublic(data.name, data.description, self);
    }

    public static jsonToTopCategory(data: any): CategoryTop {
        let self: Link = DTOConverter.jsonToLink("self", data._links.self);

        return new CategoryTop(data.name, data.imagebase64, self);
    }

    public static jsonToTopCourse(data: any): CourseTop {
        let self: Link = DTOConverter.jsonToLink("self", data._links.self);

        return new CourseTop(data.name, data.imagebase64, self);
    }

    public static jsonToPublicCategories(data: any): CategoriesPublic {
        let self: Link = DTOConverter.jsonToLink("self", data._links.self);

        return new CategoriesPublic(data.name, data.description, data.imagebase64, self);
    }

    public static jsonToPublicCategory(data: any): CategoryLink {
        let self: Link = DTOConverter.jsonToLink("self", data._links.self);
        let courses: Link = DTOConverter.jsonToLink("courses", data._links.courses);
        let decks: Link = DTOConverter.jsonToLink("decks", data._links.decks);

        return new CategoryLink(data.name, data.description, data.imagebase64, self, decks, courses);
    }

    public static jsonToLink(rel: string, data: any): Link {
        return new Link(rel, data.href);
    }

    public static jsonArrayToCollection(callback: Function, data: Array<any>): Array<any> {
        let array: Array<any> = [];
        data.forEach(element => {
            array.push(callback(element));
        });
        return array;
    }
}