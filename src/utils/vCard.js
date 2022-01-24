/**
 * Shamelessly stolen (and improved) from: https://github.com/joaocarmo/vcard-creator
 */
export default class vCard {
    constructor() {
        /**
         * definedElements
         *
         * @let array
         */
        this.definedElements = []
        /**
         * Multiple properties for element allowed
         *
         * @let array
         */
        this.multiplePropertiesForElementAllowed = [
            'email',
            'address',
            'phoneNumber',
            'url'
        ]
        /**
         * Properties
         *
         * @let array
         */
        this.properties = []
        /**
         * Default Charset
         *
         * @let string
         */
        this.charset = 'utf-8'
        /**
         * Default ContentType
         *
         * @let string
         */
        this.contentType = 'text/x-vcard'
        /**
         * Default fileExtension
         *
         * @let string
         */
        this.fileExtension = 'vcf'
    }

    /**
     * Add address
     *
     * type may be DOM | INTL | POSTAL | PARCEL | HOME | WORK
     * or any combination of these: e.g. 'WORK;PARCEL;POSTAL'
     * @return this
     * @param name
     * @param extended
     * @param street
     * @param city
     * @param region
     * @param zip
     * @param country
     * @param type
     */
    addAddress(
        name = '',
        extended = '',
        street = '',
        city = '',
        region = '',
        zip = '',
        country = '',
        type = 'WORK,POSTAL'
    ) {
        // init value
        let value = name + ';' + extended + ';' + street + ';' + city + ';' + region + ';' + zip + ';' + country
        // set property
        this.setProperty(
            'address',
            'ADR' + ((type !== '') ? ';' + type : '') + this.getCharsetString(),
            value
        )
        this.setProperty(
            'label',
            'LABEL' + ((type !== '') ? ';' + type : '') + this.getCharsetString(),
            `${street}${extended ? '\n' + extended : ''}\\n${city}, ${region} ${zip}`
        )
        return this
    }

    /**
     * Add birthday
     *
     * @return this
     * @param date
     */
    addBirthday(date)
    {
        this.setProperty(
            'birthday',
            'BDAY',
            date
        )
        return this
    }

    /**
     * Add company
     *
     * @return this
     * @param {string} company
     * @param {string} department
     */
    addCompany(company, department = '')
    {
        this.setProperty(
            'company',
            'ORG' + this.getCharsetString(),
            company
            + (department !== '' ? ';' + department : '')
        )
        return this
    }

    /**
     * Add email
     *
     * The type of the email address
     * type may be  PREF | WORK | HOME
     * or any combination of these: e.g. 'PREF;WORK'
     * @return this
     * @param address
     * @param type
     */
    addEmail(address, type = '')
    {
        this.setProperty(
            'email',
            'EMAIL;INTERNET' + ((type !== '') ? ';' + type : ''),
            address
        )
        return this
    }

    /**
     * Add jobtitle
     *
     * @return this
     * @param {string} jobtitle
     */
    addJobtitle(jobtitle)
    {
        this.setProperty(
            'jobtitle',
            'TITLE' + this.getCharsetString(),
            jobtitle
        )
        return this
    }

    /**
     * Add role
     *
     * @return this
     * @param role
     */
    addRole(role)
    {
        this.setProperty(
            'role',
            'ROLE' + this.getCharsetString(),
            role
        )
        return this
    }

    /**
     * Add a photo or logo (depending on property name)
     *
     * @param property
     * @param url
     * @param include
     * @param element
     */
    addMedia(property, url, include = true, element)
    {
        return this
    }

    /**
     * Add name
     *
     * @return this
     * @param lastName
     * @param firstName
     * @param additional
     * @param prefix
     * @param suffix
     */
    addName(
        lastName = '',
        firstName = '',
        additional = '',
        prefix = '',
        suffix = ''
    ) {
        // define values with non-empty values
        let values = [
            prefix,
            firstName,
            additional,
            lastName,
            suffix,
        ].filter(m => !!m)
        // set property
        let property = lastName + ';' + firstName + ';' + additional + ';' + prefix + ';' + suffix
        this.setProperty(
            'name',
            'N' + this.getCharsetString(),
            property
        )
        // is property FN set?
        if (!this.hasProperty('FN')) {
            // set property
            this.setProperty(
                'fullname',
                'FN' + this.getCharsetString(),
                values.join(' ').trim()
            )
        }
        return this
    }

    /**
     * Add note
     *
     * @return this
     * @param note
     */
    addNote(note)
    {
        this.setProperty(
            'note',
            'NOTE' + this.getCharsetString(),
            note
        )
        return this
    }

    /**
     * Add categories
     *
     * @return this
     * @param {array} categories
     */
    addCategories(categories)
    {
        this.setProperty(
            'categories',
            'CATEGORIES' + this.getCharsetString(),
            categories.join(',').trim()
        )
        return this
    }

    /**
     * Add phone number
     *
     * Type may be PREF | WORK | HOME | VOICE | FAX | MSG |
     * CELL | PAGER | BBS | CAR | MODEM | ISDN | VIDEO
     * or any combination, e.g. 'PREF;WORK;VOICE'
     * @return this
     * @param number
     * @param type
     */
    addPhoneNumber(number, type = '')
    {
        this.setProperty(
            'phoneNumber',
            'TEL' + ((type !== '') ? ';' + type : ''),
            number
        )
        return this
    }

    /**
     * Add Logo
     *
     * @return this
     * @param url
     * @param include
     */
    addLogo(url, include = true)
    {
        this.addMedia(
            'LOGO',
            url,
            include,
            'logo'
        )
        return this
    }

    /**
     * Add Photo
     *
     * @return this
     * @param url
     * @param include
     */
    addPhoto(url, include = true)
    {
        this.addMedia(
            'PHOTO',
            url,
            include,
            'photo'
        )
        return this
    }

    /**
     * Add URL
     *
     * @param  {string} url
     * @param  {string} type Type may be WORK | HOME
     * @return this
     */
    addURL(url, type = '')
    {
        this.setProperty(
            'url',
            'URL' + ((type !== '') ? ';' + type : ''),
            url
        )
        return this
    }

    /**
     * Build vCard (.vcf)
     *
     * @return {string}
     */
    buildVCard()
    {
        // init string
        let now = new Date()
        let string = ''
        string += 'BEGIN:VCARD\r\n'
        string += 'VERSION:3.0\r\n'
        string += 'REV:' + now.toISOString() + '\r\n'
        // loop all properties
        let properties = this.getProperties()
        properties.forEach(property => {
            // add to string
            string += vCard.fold(property['key'] + ':' + vCard.escape(property['value']) + '\r\n')
        })
        // add to string
        string += 'END:VCARD\r\n'
        // return
        return string
    }

    /**
     * Fold a line according to RFC2425 section 5.8.1.
     *
     * @link http://tools.ietf.org/html/rfc2425#section-5.8.1
     * @param  {string} text
     * @return {*}
     */
    static fold(text)
    {
        if (text.length <= 75) {
            return text
        }
        // split, wrap and trim trailing separator
        let chunks = text.match(/.{1,73}/g)
        let wrapped = chunks.join('\r\n ').trim()
        return wrapped + '\r\n'
    }

    /**
     * Escape newline characters according to RFC2425 section 5.8.4.
     *
     * @link http://tools.ietf.org/html/rfc2425#section-5.8.4
     * @param  {string} text
     * @return {string}
     */
    static escape(text)
    {
        let escapedText = ('' + text).replace('\r\n', '\\n')
        escapedText = escapedText.replace('\n', '\\n')
        return escapedText
    }

    /**
     * Get output as string
     * @deprecated in the future
     *
     * @return string
     */
    toString()
    {
        return this.getOutput()
    }

    /**
     * Get charset
     *
     * @return string
     */
    getCharset()
    {
        return this.charset
    }

    /**
     * Get charset string
     *
     * @return string
     */
    getCharsetString()
    {
        let charsetString = ''
        if (this.charset === 'utf-8') {
            charsetString = ';CHARSET=' + this.charset
        }
        return charsetString
    }

    /**
     * Get content type
     *
     * @return string
     */
    getContentType()
    {
        return this.contentType
    }

    /**
     * Get file extension
     *
     * @return string
     */
    getFileExtension()
    {
        return this.fileExtension
    }

    /**
     * Get output as string
     * iOS devices (and safari < iOS 8 in particular) can not read .vcf (= vcard) files.
     * So I build a workaround to build a .ics (= vcalender) file.
     *
     * @return string
     */
    getOutput()
    {
        return this.buildVCard()
    }

    /**
     * Get properties
     *
     * @return array
     */
    getProperties()
    {
        return this.properties
    }

    /**
     * Has property
     *
     * @param  {string} key
     * @return boolean
     */
    hasProperty(key)
    {
        let properties = this.getProperties()
        properties.forEach(property => {
            if (property['key'] === key && property['value'] !== '') {
                return true
            }
        })
        return false
    }

    /**
     * Set charset
     *
     * @param  {*} charset
     * @return void
     */
    setCharset(charset)
    {
        this.charset = charset
    }

    /**
     * Set property
     *
     * @throws VCardException
     * @param element
     * @param key
     * @param value
     */
    setProperty(element, key, value)
    {
        if (this.multiplePropertiesForElementAllowed.indexOf(element) < 0
            && this.definedElements[element]
        ) {
            throw new Error(`This element already exists (${element})`)
        }
        // we define that we set this element
        this.definedElements[element] = true
        // adding property
        this.properties.push({
            'key': key,
            'value': value
        })
    }
}