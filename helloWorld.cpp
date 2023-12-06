#include <string_view>
#include <string>
#include <vector>
#include <iostream>

// A matcher helper that keeps track for each word
// you want to detect how many letters it has seen
// (I do make use of the fact that words for numbers do not have repeated sequences)
struct matcher_t
{
    bool match(const char c)
    {
        // each time a letter matches we increase matched
        if (word[matched] == c)
        {
            matched++;
            // if the number of letters matches the size of the word
            // its a match
            if (matched == word.size())
            {
                matched = 0;
                return true;
            }
        }
        else
        {
            matched = 0;
        }
        return false;
    }

    std::string_view word;
    std::size_t matched;
};

auto detect_numbers(std::string_view input)
{
    static std::vector<matcher_t> matchers
    {
        { "zero" },
        { "one" },
        { "two" },
        { "three" },
        { "four" },
        { "five" },
        { "six" },
        { "seven" },
        { "eight" },
        { "nine" }
    };

    std::vector<std::string_view> matches;

    // loop once over the input string
    for (char c : input)
    {   
        std::cout << c << "\n";
       
    
        {
            // and use the matcher for each individual word.
            for (auto& matcher : matchers)
            {
                if (matcher.match(c))
                {
                    std::cout << matcher.word << '\n';
                    matches.push_back(matcher.word);
                    matcher.matched = 0;
                }
            }
        }
    }

    return matches;
}


int main()
{
    std::string input{ "eightwo5" };
    auto numbers = detect_numbers(input);

    // for (const auto& number : numbers)
    // {
    //     std::cout << number << "\n";
    // }

    return 0;
}
